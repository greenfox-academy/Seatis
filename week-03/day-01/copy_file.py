# Write a function that copies a file to an other
# It should take the filenames as parameters
# It should return a boolean that shows if the copy was successful

def copy_file(path_from, path_to):
    try:
        fr = open(path_from, "r")
        text = fr.read()
        fr.close()
    except IOError:
        print("Unable to read file:", path_from)
    try:
        fw = open(path_to, "w")
        fw.write(text)
        fw.close()
    except IOError:
        print("Unable to write file:", path_to)
def main():
    copy_file("files/my-file.txt", "files/copy.txt")
main()