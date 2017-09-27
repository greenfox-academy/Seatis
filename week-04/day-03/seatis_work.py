class TestMyMethods(object):

    def get_apple(self, word = "apple"):
        return word

    def sum_items(self, num_list):
        return sum(num_list)

    def anagram(self, string_1, string_2):
        if len(string_1) != len(string_2):
            return False
        else:
            return sorted(string_1) == sorted(string_2)

    def count_letters(self, string):
        dictionary = {}
        for letter in list(string):
            dictionary[letter] = string.count(letter)
        return dictionary

    def fibonacci(self, n):
        if type(n) is not int:
            return
        else:
            if n == 0:
                return 0
            elif n == 1: 
                return 1
            else: 
                return self.fibonacci(n-1) + self.fibonacci(n-2)
    
class Sharpie(object):

    def __init__(self, color="no color", width=0):
        self.ink_amount = 100
        self.color = color
        self.width = float(width)
    
    def use(self):
        self.ink_amount -= 1

# peldany = TestMyMethods()
# peldany.count_letters("attila")
