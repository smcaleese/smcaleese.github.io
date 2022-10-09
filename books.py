import pandas as pd

def main():
    book_data = pd.read_csv('bookshelf.csv')
    with open('output.txt', 'w') as f:
        for index, row in book_data.iterrows():
            title, author, recommend = row['title'], row['author'], row['recommend']
            star_str = '&#11088;'
            recommend_str = star_str if recommend == 'yes' else ''
            html_string = f'<tr><td>{title}</td><td>{author}</td><td class="has-text-centered">{recommend_str}</td></tr>\n'
            f.write(html_string)

if __name__ == '__main__':
    main()
