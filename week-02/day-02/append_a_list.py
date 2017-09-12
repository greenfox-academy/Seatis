# - Create a variable named `nimals`
#   with the following content: `["kuty", "macs", "cic"]`
# - Add all elements an `"a"` at the end
nimals = ["kuty", "macsk", "cic"]
j = 0
for i in nimals:
    i += "a"
    nimals[j] = i
    print(i)
    j += 1
print(nimals)
