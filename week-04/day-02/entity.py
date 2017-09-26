class Entity:
    def __init__(self):
        self.x = 10
        self.y = 10

    def talk(self):
        return 'I\'m at {} {} location'.format(self.x, self.y)

class Items:
    def __init__(self):
        self.inventory = [1, 2, 3]

class Player(Entity, Items):
    def __init__(self):
        super().__init__()
        Items.__init__(self)
        self.x = 33
        print("Class is initialized.")

hero = Player()
print(hero.talk())