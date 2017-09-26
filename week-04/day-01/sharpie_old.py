class Sharpie(object):

    ink_amount = 100

    def __init__(self, sharpie_id, color, width):
        self.sharpie_id = sharpie_id
        self.color = color
        self.width = float(width)
        SharpieSet.sharpie_list.append({"id": self.sharpie_id, "color": self.color, "width": self.width, "Ink amount": self.ink_amount})
    
    def use(self):
        if self.ink_amount == 0:
            self.ink_amount = 0
        else:
            self.ink_amount -= 1
        SharpieSet.sharpie_list[self.sharpie_id-1]["Ink amount"] = self.ink_amount

class SharpieSet(object):
    
    sharpie_list = []
    
    def printer(self, sharpie_list):
        for item in self.sharpie_list:
            print("ID_" + str(item["id"]) + ", color: " + item["color"] + ", width: " + str(item["width"]) + ", Ink amount: " + str(item["Ink amount"]))
        print("Number of usable sharpies:", self.counter)
        print("\n")

    
    def count_usable(self):
        self.counter = 0
        for i in range(len(self.sharpie_list)):
            if self.sharpie_list[i]["Ink amount"] != 0:
                self.counter += 1
        self.printer(self.sharpie_list)

    def remove_trash(self):
        self.remove_index = []
        for i in range(len(self.sharpie_list)):
            if self.sharpie_list[i]["Ink amount"] == 0:
                self.remove_index.append(i)
        for i in range(len(self.remove_index)):
            del self.sharpie_list[self.remove_index[i]]           
        self.printer(self.sharpie_list)

sharpie_01 =  Sharpie(1, "red", 12)
sharpie_02 =  Sharpie(2, "yellow", 8)
sharpie_03 =  Sharpie(3, "blue", 21)
sharpies = SharpieSet()

for i in range(10):
    sharpie_01.use()

for i in range(30):
    sharpie_02.use()

for i in range(10):
    sharpie_03.use()


sharpies.count_usable()
sharpies.remove_trash()



