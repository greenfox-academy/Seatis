class Aircraft(object):

    ammo = 0

    def __init__(self, type_of_aircraft, nickname):
        self.type_of_aircraft = type_of_aircraft
        self.nickname = nickname
        if self.type_of_aircraft == "F16":
            self.max_ammo = 8
            self.base_damage = 30
        else:
            self.max_ammo = 12

0            self.base_damage = 50
    
    def fight(self):
        self.ammo_temp = self.ammo
        self.ammo = 0
        return self.base_damage * self.ammo_temp
    
    def refill(self, refill_amount):
        if refill_amount < self.max_ammo:
            self.ammo = refill_amount
            return 0
        else:
            self.ammo = self.max_ammo
            return refill_amount - self.max_ammo

    def getType(self):
        return self.type_of_aircraft

    def getStatus(self):
        return 'Type: {}, Ammo: {}, Base damage: {}, All damage: {}'.format(self.type_of_aircraft, self.ammo, self.base_damage, self.base_damage * self.ammo) 


class Carrier(object):

    def __init__(self, initial_ammo, health_point):
        self.aircrafts = []
        self.ammo_store = initial_ammo
        self.health_point = health_point
        self.total_damage = 0
    
    def add_aircraft(self, type_of_aircraft, nickname):
        self.aircrafts.append(Aircraft(type_of_aircraft, nickname))

    def fill(self, refill_amount):
        if refill_amount < self.ammo_store:
            for fighter in self.aircrafts:
                if fighter.type_of_aircraft == "F35":      
                    refill_amount = fighter.refill(refill_amount)
            for fighter in self.aircrafts:
                if fighter.type_of_aircraft == "F16":      
                    refill_amount = fighter.refill(refill_amount)             
        else:
            print("The carrier is out of ammo, sorry!")
    
    def fight_carrier(self, carrier):
        self.carrier = carrier
        for fighter in self.aircrafts:
            self.one_damage = fighter.fight()
            self.carrier.health_point -= self.one_damage
            # self.total_damage += self.one_damage
    
    def getStatus(self):
        self.all_damage = 0
        if self.health_point < 0:
            print("It's dead Jim :(")
        else:
            for fighter in self.aircrafts:
                self.all_damage += fighter.base_damage * fighter.ammo
            print('HP: {}, Aircraft count: {}, Ammo stotage: {}, Total damage: {}'.format(self.health_point, len(self.aircrafts), self.ammo_store, self.all_damage))
            print('Aircrafts:')
            for fighter in self.aircrafts:
                print('Name: {}, Type: {}, Ammo: {}, Base Damage: {}, All Damage: {}'.format(fighter.nickname, fighter.type_of_aircraft, fighter.ammo, fighter.base_damage, fighter.base_damage * fighter.ammo))


enterprise = Carrier(3000, 5000)
windforce = Carrier(3000, 5000)
windforce.add_aircraft("F16", "BalackDead")
windforce.add_aircraft("F35", "GreenFox")
enterprise.add_aircraft("F16", "Iceman")
enterprise.add_aircraft("F35", "Badfox")

enterprise.fill(20)
windforce.fill(20)
enterprise.getStatus()
windforce.getStatus()
enterprise.fight_carrier(windforce)
enterprise.getStatus()
windforce.getStatus()