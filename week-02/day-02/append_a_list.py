# - Create a variable named `nimals`
#   with the following content: `["kuty", "macs", "cic"]`
# - Add all elements an `"a"` at the end
nimals = ["kuty", "macsk", "cic"]
for i in range(len(nimals)):
    str_list = (list(nimals[i]))
    str_list.append("a") 
    nimals[i] = ''.join(str_list)
print(nimals)