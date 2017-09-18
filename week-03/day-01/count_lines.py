# Write a function that takes a filename as string,
# then returns the number of lines the file contains.
# It should return zero if it can't open the file, and
# should not raise any error.

def line_counter(file_name):
    try:
        my_file = open(file_name, "r")
        i = 0
        for line in my_file:
            print(line)
            i += 1
        return i
        # print (len(my_file.readlines()))
    except IOError:
        return 0
def main():
    print(line_counter("files/my-file.txt"))
main()