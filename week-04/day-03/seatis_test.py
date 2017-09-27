import unittest
from seatis_work import TestMyMethods

my_method = TestMyMethods()

class TestAppleString(unittest.TestCase):

    def test_apple_string(self):
        self.assertEqual("apple", my_method.get_apple())

if __name__ == '__main__':
    unittest.main(exit=False)

class TestSumNumbers(unittest.TestCase):

    def test_sum_numbers(self):
        self.assertEqual(6, my_method.sum_items([1, 2, 3]))

if __name__ == '__main__':
    unittest.main(exit=False)

class TestAnagram(unittest.TestCase):

    def anagram_test(self):
        self.assertTrue(my_method.anagram("rail sfety", "fairy tales"))

if __name__ == '__main__':
    unittest.main(exit=False)

class TestCountLetters(unittest.TestCase):   

    def test_count_letters(self):
        self.assertEqual(my_method.count_letters("attila"), {"a": 2, "t": 2, "i": 1, "l": 1})

if __name__ == '__main__':
    unittest.main(exit=False)