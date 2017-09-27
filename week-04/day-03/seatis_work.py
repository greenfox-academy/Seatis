class TestMyMethods(object):

    def get_apple(self):
        return "apple"

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

# peldany = TestMyMethods()
# peldany.count_letters("attila")
