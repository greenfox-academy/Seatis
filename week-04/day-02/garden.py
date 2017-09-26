class Garden(object):

    flowers =  []
    trees = []

    def add_flower(self, color):
        self.flowers.append(Flower(color))

    def add_tree(self, color):
        self.trees.append(Tree(color))
    
    def watering(self, amount):
        print("Watering width", amount)
        self.amount = amount / (len(self.flowers) + len(self.trees))
        for flower in self.flowers:
            flower.water_amount += 0.75 * self.amount
        for tree in self.trees:
            tree.water_amount += 0.4 * self.amount

    def show_garden(self):
        for flower in self.flowers:
            if flower.water_amount < 5:
                print("The " + flower.color + " Flower needs water")
            else:
                print("The " + flower.color + " Flower doesnt need water")
        for tree in self.trees:
            if tree.water_amount < 10:
                print("The " + tree.color + " Tree needs water")
            else:
                print("The " + tree.color + " Tree doesnt need water")
        print("")

class Flower(object):
    
    water_amount = 0

    def __init__(self, color):
        self.color = color

class Tree(object):

    water_amount = 0
    
    def __init__(self, color):
        self.color = color

garden = Garden()
garden.add_flower("yellow")
garden.add_flower("blue")
garden.add_tree("purple")
garden.add_tree("orange")
garden.show_garden()
garden.watering(40)
garden.show_garden()
garden.watering(70)
garden.show_garden()