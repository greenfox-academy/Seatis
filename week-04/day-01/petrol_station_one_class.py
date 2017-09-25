class PetrolStation(object):
    station_gas_amount = 1000
    car_gas_amount = 0
    capacity = 100

    def refill(self):
        self.station_gas_amount -= self.capacity
        self.car_gas_amount += self.capacity
    
    def check_station_gas_amount(self):
        print(str(self.station_gas_amount) + " amount left!")

car1 = PetrolStation()
car2 = PetrolStation()

car1.refill()
car1.refill()
car1.check_station_gas_amount()




#     def checkLife(self):
#         if self.life <= 0:
#             print('Game Over')
#         else:
#             print(str(self.life) + " life left")

# enemy_1 = Enemy()
# enemy_2 = Enemy()

# enemy_1.attack()
# enemy_1.attack()
# enemy_1.checkLife()
# enemy_2.checkLife()