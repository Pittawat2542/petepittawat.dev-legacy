---
title: 'How to Split Large CSV Files into Equal Number of Rows using Pandas: A Step-by-Step Guide'
slug: how-to-split-large-csv-file-pandas
date: '2023-04-23T11:09:00.000Z'
tags: Python
coverImage: /assets/blog/how-to-split-large-csv-file-pandas/cover.jpeg
excerpt: When working with large datasets in CSV format, it can be challenging to process them efficiently. One solution to this problem is to split the large CSV file into smaller files with an equal number of rows using the Pandas library. This tutorial will show you how to split a large CSV file into smaller ones based on the given code.
author:
  name: Pittawat Taveekitworachai
  picture: /assets/blog/authors/pittawat.jpg
ogImage:
  url: /assets/blog/how-to-split-large-csv-file-pandas/cover.jpeg
---

## Introduction

When working with large datasets in CSV format, it can be challenging to process them efficiently. One solution to this problem is to split the large CSV file into smaller files with an equal number of rows using the Pandas library. This tutorial will show you how to split a large CSV file into smaller ones based on the given code. We will use the Pandas library to read, process, and write CSV files.

## Prerequisites

Before starting with the tutorial, you should have the following:

- Python 3.x installed on your computer
- A text editor or IDE, such as PyCharm or Visual Studio Code
- Basic knowledge of Python programming language and Pandas library

## Splitting Large CSV File using Pandas

Full code:

```python
def split_large_file_by_n_rows(original_file_name, n_rows = 100, filename = 'data', has_index=True, verbose=True):
  row_count = 0
  chunk = pd.DataFrame()

  with open(original_file_name, 'r') as file:
      header = file.readline()
      columns = header.strip().split(',')
      chunk_count = 0

      for _, row in enumerate(file):
          if has_index:
            temp_row = [row.strip().split(',')[1:]]
          else:
            temp_row = [row.strip().split(',')]

          chunk = chunk.append(pd.DataFrame(temp_row, columns=columns))
          row_count += 1

          if row_count == n_rows:
              chunk.to_csv(f'{filename}_{chunk_count}.csv', index=False)
              if verbose:
                print(f'Successfully created {filename}_{chunk_count}.csv')
              row_count = 0
              chunk = pd.DataFrame()
              chunk_count += 1

      if row_count > 0:
          chunk.to_csv(f'{filename}_{chunk_count}.csv', index=False)
          if verbose:
            print(f'Successfully created {filename}_{chunk_count}.csv')
            
if __name__ == '__main__':
  split_large_file_by_n_rows('relative_path_from_script/file_name.csv', n_rows=1000, filename='path_to_new_file/file_name_without_extension', has_index=True, verbose=True)
```

The function **`split_large_file_by_n_rows`** accepts four parameters:

1. **`original_file_name`**: The path to the large CSV file that you want to split.
2. **`n_rows`**: The number of rows per file.
3. **`filename`**: The prefix for the output file name.
4. **`has_index`**: A boolean value that determines if the input file has an index column or not.
5. **`verbose`**: A boolean value that determines if the function should print output messages or not.

The function uses the **`pandas`** library to read the CSV file and split it into smaller files. The basic idea is to read the original CSV file, process it row by row, and write each chunk of **`n_rows`** rows to a new CSV file.

Let's go through the code step by step.

### Step 0: Importing the Pandas Library

The first step in splitting a large CSV file into smaller ones using the Pandas library is to import the library. Pandas is a powerful data analysis and manipulation tool that provides data structures for efficiently storing and manipulating large datasets. To use the Pandas library, you need to install it using **`pip`**. You can install Pandas by running the following command in your terminal:

```bash
pip install pandas
```

Once you have installed Pandas, you can import it in your Python script using the **`import`**
 statement:

```python
import pandas as pd
```

The **`as pd`** part of the statement is optional and is used to create an alias for the Pandas library. This alias makes it easier to reference the Pandas library in your code.

### Step 1: Reading the CSV file

The first step is to open the original CSV file and read the first line, which contains the header. The header line is then split into columns, which are used to create a **`pandas`** DataFrame object to store the rows of the CSV file.

```python
with open(original_file_name, 'r') as file:
	header = file.readline()
	columns = header.strip().split(',')
	chunk = pd.DataFrame()
```

The **`with`** statement is used to ensure that the file is closed properly after it is read. The **`readline()`** method reads the first line of the CSV file, which contains the header. The **`strip()`** method removes any leading or trailing spaces, and the **`split()`** method splits the header into columns using a comma delimiter.

### Step 2: Processing the rows

The next step is to process the rows of the CSV file one by one. The **`for`** loop reads each row, splits it into columns, and appends it to the **`pandas`** DataFrame object.

```python
for _, row in enumerate(file):
	if has_index:
		temp_row = [row.strip().split(',')[1:]]
	else:
		temp_row = [row.strip().split(',')]
		chunk = chunk.append(pd.DataFrame(temp_row, columns=columns))
```

The **`enumerate()`** function is used to get the index of each row in the CSV file. The **`strip()`** method is used to remove any leading or trailing spaces, and the **`split()`** method is used to split the row into columns using a comma delimiter. If the **`has_index`** parameter is set to **`True`**, the first column is skipped by using **`[1:]`** slicing. Otherwise, all columns are used.

### Step 3: Writing the output files

After writing the chunk of **`n_rows`** rows to a new CSV file, the row count and the **`pandas`** DataFrame object are reset to their initial values. This process continues until all rows of the CSV file have been processed.

```python
if row_count == n_rows:
    chunk.to_csv(f'{filename}_{chunk_count}.csv', index=False)
    if verbose:
        print(f'Successfully created {filename}_{chunk_count}.csv')
    row_count = 0
    chunk = pd.DataFrame()
    chunk_count += 1

if row_count > 0:
    chunk.to_csv(f'{filename}_{chunk_count}.csv', index=False)
    if verbose:
        print(f'Successfully created {filename}_{chunk_count}.csv')
```

If there are remaining rows after the loop, the last chunk of rows is written to a new CSV file. The **`index`** parameter of the **`to_csv()`** method is set to **`False`** to exclude the row index from the output file.

## Using the Function

To use the **`split_large_file_by_n_rows()`** function, you need to provide the path to the original CSV file, the number of rows per file, the prefix for the output file name, and two boolean values to indicate if the input file has an index column and if the function should print output messages.

Here is an example of how to use the function:

```python
split_large_file_by_n_rows('path/to/large_file.csv', n_rows=1000, filename='path/to/output_file', has_index=True, verbose=True)
```

This code will split the **`large_file.csv`** into smaller files containing 1000 rows each. The output files will be named **`output_file_0.csv`**, **`output_file_1.csv`**, **`output_file_2.csv`**, and so on. The output files will be located in the **`path/to`** directory. The input file has an index column, and the function will print output messages.

## Conclusion

In this tutorial, you learned how to split a large CSV file into smaller ones using the Pandas library. You also learned how to use the **`split_large_file_by_n_rows()`** function to split a large CSV file into smaller files containing an equal number of rows. This method can be useful when working with large datasets that cannot be processed efficiently in one go.

---

## *📚 Hope you enjoy reading! 📚*

---
