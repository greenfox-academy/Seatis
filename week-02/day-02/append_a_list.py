# - Create a variable named `nimals`
#   with the following content: `["kuty", "macs", "cic"]`
# - Add all elements an `"a"` at the end
nimals = ["kuty", "macsk", "cic"]
j = 0
for name in nimals:
    name += "a"
    nimals[j] = name
    print(name)
    j += 1
print(nimals)
