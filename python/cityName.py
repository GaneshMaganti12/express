textCity = open(r'C:\Users\GANESH MAGANTI\Desktop\cities.txt')

cityNames = []
for name in textCity:
    names = name.strip("\n")
    cityNames.append(names)

print(cityNames.count("California"))