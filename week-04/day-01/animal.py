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

dog = Animal()
cat = Animal()
elephant = Animal()

for i in range(10):
    cat.eat()
print(cat.hunger)