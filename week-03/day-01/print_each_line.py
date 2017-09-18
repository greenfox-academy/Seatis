# Write a program that opens a file called "my-file.txt", then prints
# each of lines form the file.
# If the program is unable to read the file (for example it does not exists),
# then it should print an error message like: "Unable to read file: my-file.txt"

file_path = "files/my-file.txt"
try:
    my_file = open(file_path, "r")
    for line in my_file:
        print(line, end = '')
    my_file.close()
except IOError:
    print("Unable to read file:", file_path)
