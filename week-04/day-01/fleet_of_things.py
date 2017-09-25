from fleet import Fleet
from thing import Thing

fleet = Fleet()
# Create a fleet of things to have this output:
# 1. [ ] Get milk
# 2. [ ] Remove the obstacles
# 3. [x] Stand up
# 4. [x] Eat lunch

fleet.add("Get milk")
fleet.add("Remove the obstacles")
fleet.add("Stand up")
fleet.add("Eat lunch")

for i in range(2):
    item = Thing(fleet.things[i])
    print(item)
    
for i in range(2, len(fleet.things)):
    item = Thing(fleet.things[i])
    item.complete()
    print(item)

# print(fleet)