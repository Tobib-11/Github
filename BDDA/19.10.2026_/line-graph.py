#einfaches liniendiagramm mit MatPlotLib (Lib wurde installiert - siehe Class Note book)
#Jeweils ein Array für die x und y-Werte
#einfache Ausgabe der Graphik

import matplotlib.pyplot as plt
x = [1, 2, 3, 4, 5]
y= [1, 4, 8, 4, 12]

print(x, y)

plt.plot(x,y)
plt.grid(True)
plt.show()