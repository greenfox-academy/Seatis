# - Create (dynamically) a two dimensional list
#   with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output

# a = [[0 for y in range(4)] for x in range(4)]

#a = []
#for x in range(8):
#    row = []
#    for y in range(8):
#        row.append(0)
#    a.append(row)

a = []
for x in range(4):
    row = []
    for y in range(4):
        if y == x:
            row.append(1)
        else:
            row.append(0)
    a.append(row)
print(a)
print("\n")

oneline = ""
for j in range(4):
    for i in range(4):
        oneline += str(a[i][j])
        oneline += " "
    print(oneline)
    oneline = ""