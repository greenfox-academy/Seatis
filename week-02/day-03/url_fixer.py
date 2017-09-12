# Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
# Also, the URL is missing a crutial component, find out what it is and insert it too!

url = "https//www.reddit.com/r/nevertellmethebots"

url = url[:-4]
url += "odds.html"
print(url)

#How to do it by list
#url_list = list(url)
#url_list[len(url_list)-4:len(url_list)] = "odds.html"
#print(''.join(url_list))