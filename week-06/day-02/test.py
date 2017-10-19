import unittest
from poker import *

class TestPoker(unittest.TestCase):

    def test_input_list(self):
        self.assertEqual([[0, 1, 2, 3, 4], [0, 1, 2, 3, 4]], get_hand([0, 1, 2, 3, 4], [0, 1, 2, 3, 4]))

    # def test_input_list(self):
    #     self.assertEqual( , high_number(""))

    
    # def test_input_list_2(self):
    #     self.assertTrue([0, 1], get_hand(0, 1))    


if __name__ == '__main__':
    unittest.main(exit=False)