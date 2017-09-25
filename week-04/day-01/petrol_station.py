class Station(object):

    gas_amount = 1000

    def refill(self):
        self.gas_amount -= Car.capacity
        Car.gas_amount += Car.capacity

class Car(object):

    gas_amount = 0
    capacity = 100

    # def __init__(self):
    #     self.gas_amount = 0
    #     self.capacity = 100

fuel = Station()
fuel.refill()
fuel.refill()
fuel.refill()
print(fuel.gas_amount)

