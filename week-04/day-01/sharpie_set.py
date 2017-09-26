class Sharpie(object):

    ink_amount = 100

    def __init__(self, color, width):
        self.color = color
        self.width = float(width)
    
    def use(self):      
        if self.ink_amount is not 0: self.ink_amount -= 1

class SharpieSet(object):

    sharpie_list = [Sharpie("red", 12), Sharpie("yellow", 8), Sharpie("green", 21)]

    def add(self, color, width):    # ez a metódus nem a feladat része, gyakorlás miatt csináltam
        self.sharpie_list.append(Sharpie(color, width))

    def usable(self):       # itt lehetne még számolni, hogy hány unusable sharpie van...
        for sharpie_unique in self.sharpie_list:
            if sharpie_unique.ink_amount == 0:
                print("The " + sharpie_unique.color + " sharpie is unusable, because it is empty!")
    
    def remove_trash(self):
        for sharpie_unique in self.sharpie_list:
            if sharpie_unique.ink_amount == 0:
                del sharpie_unique


# SharpieSet példányosítása és tesztelés
sharpie_pack = SharpieSet()

sharpie_pack.add("blue", 5.6)
print(sharpie_pack.sharpie_list[-1].color)      # ez itt a blue kell, hogy legyen

for i in range(101):
    sharpie_pack.sharpie_list[-1].use()     

print(sharpie_pack.sharpie_list[-1].ink_amount)
sharpie_pack.usable()
