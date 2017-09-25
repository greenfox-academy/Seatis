class Animal(object):

    hunger = 50
    thirst = 50

    def eat(self):
        self.hunger -= 1

    def drink(self):
        self.thirst -= 1

    def play(self):
        self.hunger += 1
        self.thirst += 1

class Farm(object):
    animals_list = []
    slots = 8

    def breed(self):
        if self.slots > 0:
            self.animals_list.append(Animal())
            self.slots -= 1
        else:
            print("There is no free places!")


    def slaughter(self):
        self.hunger_index = []
        for animal in self.animals_list:
            self.hunger_index.append(animal.hunger)
        del self.animals_list[self.hunger_index.index(min(self.hunger_index))]
        self.slots += 1
        print(len(self.animals_list))
    
    def animal_feed(self):
        self.animals_list[1].eat()
        self.animals_list[1].eat()
        self.animals_list[1].eat()
        print(self.animals_list[1].hunger)

farm = Farm()
farm.breed()
farm.breed()
farm.breed()
farm.breed()
farm.breed()
farm.breed()
farm.breed()
farm.breed()
farm.animal_feed()
farm.slaughter()

# dog = Animal()
# cat = Animal()
# elephant = Animal()

# for i in range(10):
#     cat.eat()
