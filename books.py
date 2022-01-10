import csv

def main():
    with open('bookshelf.csv', newline='') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        rows = [row for row in csv_reader][1:]

    with open('output.txt', 'w') as f:
        for row in rows:
            title, author = row
            html_string = f'<tr><td>{title}</td><td>{author}</td></tr>\n'
            f.write(html_string)

if __name__ == '__main__':
    main()
