shop_items = ["Cupcake", 2, "Brownie", "false"]

# Accidentally we added "2" and "false" to the list. 
# Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
# No, don't just remove the items :)

shop_items = shop_items[:1] + ["Croissant"] + shop_items[2:3] + ["Ice Cream"]

print (shop_items)