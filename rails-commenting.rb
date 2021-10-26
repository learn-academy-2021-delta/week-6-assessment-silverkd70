# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is the inheritence of ApplicationController to BlogPostController class, (** added this during review ** which likely came from a generate command, inhereting from the ApplicationController)
class BlogPostsController < ApplicationController
  def index
    # ---2) This will call on the instance controller method @posts to return all data within BlogPost. (** added this during review **defining an istance variable holding an Active Record quary returning all instances.)
    @posts = BlogPost.all
  end

  def show
    # ---3) This will call on the instance controller method @posts to search for a specific parameter :id within BlogPost. (** added this during review ** defining an instance variable holding an Active Record query finding one item from the BlogPost db to find a particular item based on the param :id)
    @post = BlogPost.find(params[:id])
  end

  # ---4) This will define a new Post form to input new information into the database within the instance controller @post. (** added this during review ** defining a metod called new that will return a form) 
  def new
    @post = Post.new
  end

  def create
    # ---5) This is calling on the instance controller method @post to create a new form under conditions using a conditional blog post params to ensure the user imput is valid before allowing the form input to be posted to the BlogPost.  If the information is not valid then the user is redirected to the new blog post path to re-input.  (** added this during review ** defining an instance variable to crage a new instance of BlogPost calling the blog_post_params string params method)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) This will allow for and edit on the instance controller methos @post to make changes to a specific parameter :id within BlogPost.  (** added this during reveiw ** defining a method that calls a RESTful route that displays a form for updating info)
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This is calling on the instance controller method @post to update a previous post under conditions using a conditional blog post params to ensure the user imput is valid before allowing the form input to be updated to the BlogPost.  If the information is not valid then the user is redirected to the edit blog post path to re-input.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This will return the user back to the @post instance if the destroy search within the find parameter :id does not exist for the destroy method. (** added this during review ** Routing to the show page)
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) This sets the security on the blog post paramater class to require authentication to set the blog to private. (** added this during review ** Everything below this line connot be accessed outside the scope of this class.)
  private
  def blog_post_params
    # ---10) These are the paramater requirements that allow the user to gain access to the blog post security settings. (** added this during review ** User is only allowed to update the title and content colums in the blog_post table.)
    params.require(:blog_post).permit(:title, :content)
  end
end
