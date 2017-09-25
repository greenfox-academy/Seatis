class Counter(object):
    
    def __init__(self, start = 0):
        self.counter = start
    
    def add(self, number = None):
        if number is not None:
            self.counter += int(number)
        else:
            self.counter += 1

    def get(self):
        return self.counter

    def reset(self):
        self.__init__()



