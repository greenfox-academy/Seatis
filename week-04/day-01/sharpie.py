class Sharpie(object):

    def __init__(self, color, width):
        self.ink_amount = 100
        self.color = color
        self.width = float(width)
    
    def use(self):
        self.ink_amount -= 1

filc_1 = Sharpie("red", 12)

filc_1.use()
filc_1.use()
print(filc_1.color, filc_1.width, filc_1.ink_amount)