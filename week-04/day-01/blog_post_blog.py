class BlogPost(object):
    author_name = ""
    title = ""
    text = ""
    publication_date = ""

class Blog(object):
    blog_posts = []

    def add(self, name, title, text, date):
        self.blog_posts.append(BlogPost())
        self.blog_posts[-1].author_name = name
        self.blog_posts[-1].title = title
        self.blog_posts[-1].text = text
        self.blog_posts[-1].publication_date = date
         
    def delete(self, index):
        del self.blog_posts[index]
    
    def update(self, index, new_post):
        self.blog_posts[index] = new_post

# tesztelés
   
blog = Blog()
blog.add("John Doe", "Lorem Ipsum", "Lorem ipsum dolor sit amet.", "2000.05.04")
blog.add("Steven Spielberg", "Jurassic Park", "This is a great movie", "2002.04.30")
blog.add("James Cameron", "Avatar", "Very good sci-fi!!!", "2012.09.17") 
print(blog.blog_posts[-2].title)


updated_post = BlogPost()
updated_post.author_name = "Jani"
updated_post.title = "Jancsi vitez"
updated_post.text = "blalalalalalalal"
updated_post.publication_date = "2017.09.25"

blog.update(1, updated_post)
print(blog.blog_posts[-2].title)

blog.delete(1)

for blogs in blog.blog_posts:
    print(blogs.title)