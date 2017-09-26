class Animal(object):

    hunger = 50
    thirst = 50

    def __init__(self, name):
        self.name = name

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

    def breed(self, name):
        if self.slots > 0:
            self.animals_list.append(Animal(name))
            self.slots -= 1
        else:
            print("There is no free places to add animal, sorry!")


    def slaughter(self):
        self.hunger_numbers = []
        for animal in self.animals_list:
            self.hunger_numbers.append(animal.hunger)
        del self.animals_list[self.hunger_numbers.index(min(self.hunger_numbers))]
        self.slots += 1
    
    def animal_feed(self, name):      # hogy lehessen etetni őket (név szerint), így működni fog a slaughter metód
        for animal in self.animals_list:
            if animal.name == name:
                animal.eat()

# tesztelés
farm = Farm()

farm.breed("malac")
farm.breed("kecske")
farm.breed("kakas")

for animal in farm.animals_list:    # állataink kilistázása
    print(animal.name)

farm.animal_feed("kecske")      # etessük meg a kecskét kétszer, na ebből mi sül ki
farm.animal_feed("kecske")

print(farm.animals_list[1].hunger)  # kecske hunger száma

farm.slaughter()                # távolítsuk el a legkevesebb hunger egységgel rendelkezőt, azaz a kecskét

for animal in farm.animals_list:    # maradék állataink kilistázása
    print(animal.name)


