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
    
    def update(self, index, updated_post):
        self.blog_posts[index] = updated_post
        

blog = Blog()
blog.add("John Doe", "Lorem Ipsum", "Lorem ipsum dolor sit amet.", "2000.05.04") 
print(blog.blog_posts[-1].title)


updated_post = BlogPost()
updated_post.author_name = "Jani"
updated_post.title = "Jancsi vitez"
updated_post.text = "blalalalalalalal"
updated_post.publication_date = "2017.09.25"
blog.update(0, updated_post)

print(blog.blog_posts[-1].title)

# blog_post_1 = BlogPost()
# blog_post_2 = BlogPost()
# blog_post_3 = BlogPost()

# blog_post_1.author_name = "John Doe"
# blog_post_1.title = "Lorem Ipsum"
# blog_post_1.text = "Lorem ipsum dolor sit amet."
# blog_post_1.publication_date = "2000.05.04"

# blog_post_2.author_name = "Tim Urban"
# blog_post_2.title = "Wait but why"
# blog_post_2.text = "A popular long-form, stick-figure-illustrated blog about almost everything."
# blog_post_2.publication_date = "2010.10.10"

# blog_post_3.author_name = "William Turton"
# blog_post_3.title = "One Engineer Is Trying to Get IBM to Reckon With Trump"
# blog_post_3.text = "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing."
# blog_post_3.publication_date = "2017.03.28"


