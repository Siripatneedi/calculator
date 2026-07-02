from tkinter import *

# Create window
root = Tk()
root.title("Simple Calculator")
root.geometry("320x450")
root.resizable(False, False)

# Entry box
entry = Entry(root, width=18, font=("Arial", 24), bd=10, relief=RIDGE, justify=RIGHT)
entry.grid(row=0, column=0, columnspan=4, padx=10, pady=20)

# Function to insert numbers/operators
def click(value):
    entry.insert(END, value)

# Function to clear screen
def clear():
    entry.delete(0, END)

# Function to calculate result
def calculate():
    try:
        result = eval(entry.get())
        entry.delete(0, END)
        entry.insert(END, result)
    except:
        entry.delete(0, END)
        entry.insert(END, "Error")

# Buttons
buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
]

row = 1
col = 0

for button in buttons:
    if button == "=":
        Button(root, text=button, width=8, height=3,
               command=calculate).grid(row=row, column=col, padx=5, pady=5)
    else:
        Button(root, text=button, width=8, height=3,
               command=lambda b=button: click(b)).grid(row=row, column=col, padx=5, pady=5)

    col += 1
    if col > 3:
        col = 0
        row += 1

# Clear button
Button(root, text="C", width=35, height=2, command=clear).grid(
    row=5, column=0, columnspan=4, padx=5, pady=10
)

root.mainloop()