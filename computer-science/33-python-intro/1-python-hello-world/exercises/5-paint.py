import math

def paint(square_meter):
    """xm as param
    xm2
    """
    liters = square_meter / 3
    paint_cans = math.ceil(liters / 18)
    price = paint_cans * 80

    return (paint_cans, price)

print(paint(30))
print(paint(0))
