# Open a file called "my-file.txt"
# Write your name in it as a single line
# If the program is unable to write the file,
# then it should print an error message like: "Unable to write file: my-file.txt"
file_path = "files/my-file.txt"
try:
    fw = open(file_path, "w")   # "a" -> write.append!!, "r+" -> both read and write!!
    fw.write("Attila Kezer\n")
    fw.write("This is the second line!\n")
    fw.close()
except IOError:
    print("Unable to write file: my-file.txt")

try:
    fr = open(file_path, "r")
    print(fr.read())
    fr.close()
except IOError:
    print("Unable to read file: my-file.txt")