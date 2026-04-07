export const topics = [
  {
    "id": 0,
    "slug": "intro",
    "title": "DSA Portfolio",
    "subtitle": "11 Topics · 268 Problems",
    "description": "A curated collection of solutions spanning 11 core computer science topics.",
    "questions": []
  },
  {
    "id": 1,
    "slug": "single-dimension-arrays",
    "title": "Single Dimension Arrays",
    "subtitle": "43 Problems",
    "description": "Curated C++ practice problems focused on single dimension arrays concepts and patterns.",
    "questions": [
      {
        "id": 1,
        "filename": "que1.cpp",
        "title": "Program to copy all elements of one array into another array",
        "question": "Que 1 : \"Program to copy all elements of one array into another array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int source[100];\n    int destination[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> source[i];\n    }\n\n    for (int i = 0; i < n; i++){\n        destination[i] = source[i];\n    }\n\n    cout << \"Copied elements  :\\n\";\n    for (int i = 0; i < n; i++){\n        cout << destination[i] << \" \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\\que1 }\nEnter number of elements: 3\nEnter 1 element : 2\nEnter 2 element : 3\nEnter 3 element : 677\nCopied elements  :\n2 3 677"
      },
      {
        "id": 2,
        "filename": "que2.cpp",
        "title": "Program to find the frequency of each element in the array",
        "question": "Que 2 : \"Program to find the frequency of each element in the array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n    int visited[100] = {0};\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    cout << \"Frequency of each element:\\n\";\n    for (int i = 0; i < n; i++){\n        if (visited[i] == 1){\n            continue;\n        }\n\n        int count = 1;\n\n        for (int j = i + 1; j < n; j++){\n            if (arr[i] == arr[j]){\n                count++;\n                visited[j] = 1;\n            }\n        }\n\n        cout << arr[i] << \" -> \" << count << \"\\n\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\\que2 }\nEnter number of elements: 5\nEnter 1 element : 1\nEnter 2 element : 2\nEnter 3 element : 2\nEnter 4 element : 4\nEnter 5 element : 4\nFrequency of each element:\n1 -> 1\n2 -> 2\n4 -> 2"
      },
      {
        "id": 3,
        "filename": "que3.cpp",
        "title": "Program to left rotate the elements of an array",
        "question": "Que 3 : \"Program to left rotate the elements of an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    int firstElement = arr[0];\n\n    for (int i = 0; i < n - 1; i++){\n        arr[i] = arr[i + 1];\n    }\n\n    arr[n - 1] = firstElement;\n\n    cout << \"Array after left rotation :\\n\";\n    for (int i = 0; i < n; i++){\n        cout << arr[i] << \" \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\\que3 }\nEnter number of elements: 6\nEnter 1 element : 1\nEnter 2 element : 2\nEnter 3 element : 3\nEnter 4 element : 4\nEnter 5 element : 5\nEnter 6 element : 6\nArray after left rotation :\n2 3 4 5 6 1"
      },
      {
        "id": 4,
        "filename": "que4.cpp",
        "title": "Program to print the duplicate elements of an array",
        "question": "Que 4 : \"Program to print the duplicate elements of an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n    int printed[100] = {0};\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    int foundDuplicate = 0;\n\n    cout << \"Duplicate elements are :\\n\";\n    for (int i = 0; i < n; i++){\n        if (printed[i] == 1){\n            continue;\n        }\n\n        int count = 1;\n        for (int j = i + 1; j < n; j++){\n            if (arr[i] == arr[j]){\n                count++;\n                printed[j] = 1;\n            }\n        }\n\n        if (count > 1){\n            cout << arr[i] << \" \";\n            foundDuplicate = 1;\n        }\n    }\n\n    if (foundDuplicate == 0){\n        cout << \"No duplicate VAlues\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\\que4 }\nEnter number of elements: 8\nEnter 1 element : 1\nEnter 2 element : 2\nEnter 3 element : 3\nEnter 4 element : 4\nEnter 5 element : 4\nEnter 6 element : 4\nEnter 7 element : 5\nEnter 8 element : 5\nDuplicate elements are :\n4 5"
      },
      {
        "id": 5,
        "filename": "que5.cpp",
        "title": "Program to print the elements of an array",
        "question": "Que 5 : \"Program to print the elements of an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n\n    int arr[] = {1,2 ,4,5,9};\n\n    cout << \"Array elements are :\\n\";\n    for (int i = 0; i < 5; i++){\n        cout << arr[i] << \" \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\\que5 }\nArray elements are :\n1 2 4 5 9"
      },
      {
        "id": 6,
        "filename": "que6.cpp",
        "title": "Program to print the elements of an array in reverse order",
        "question": "Que 6 : \"Program to print the elements of an array in reverse order\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n\n    int arr[] = {1,2 ,4,5,9};\n\n    cout << \"Array elements in Reverse are  :\\n\";\n    for (int i = 4; i >= 0 ; i--){\n        cout << arr[i] << \" \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?) { .\\que6 }\nArray elements in Reverse are  :\n9 5 4 2 1"
      },
      {
        "id": 7,
        "filename": "que7.cpp",
        "title": "Program to print the elements of an array present on even position",
        "question": "Que 7 : \"Program to print the elements of an array present on even position\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n\n    int arr[] = {1,2 ,4,5,9};\n\n    cout << \"Array elements at even are :\\n\";\n    for (int i = 1; i < 5; i+=2){\n        cout << arr[i] << \" \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\\que7 }\nArray elements at even are :\n2 5"
      },
      {
        "id": 8,
        "filename": "que8.cpp",
        "title": "Program to print the elements of an array present on odd position",
        "question": "Que 8 : \"Program to print the elements of an array present on odd position\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n\n    int arr[] = {1,2 ,4,5,9};\n\n    cout << \"Array elements at odd are :\\n\";\n    for (int i = 0 ; i < 5; i+=2){\n        cout << arr[i] << \" \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\\que8 }\nArray elements at odd are :\n1 4 9"
      },
      {
        "id": 9,
        "filename": "que9.cpp",
        "title": "Program to print the largest element in an array",
        "question": "Que 9 : \"Program to print the largest element in an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n\n    int arr[] = {0,1,2,3,44,5,6,7,8,9};\n\n    int largest = arr[0];\n\n    for (int i = 1; i < 10; i++){\n        if (arr[i] > largest){\n            largest = arr[i];\n        }\n    }\n\n    cout << \"Largest element is: \" << largest << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\\que9 }\nLargest element is: 44"
      },
      {
        "id": 10,
        "filename": "que10.cpp",
        "title": "Program to print the smallest element in an array",
        "question": "Que 10 : \"Program to print the smallest element in an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n\n    int arr[] = {0,1,2,3,44,5,6,7,8,9};\n\n    int smallest = arr[0];\n\n    for (int i = 1; i < 10; i++){\n        if (arr[i] < smallest){\n            smallest = arr[i];\n        }\n    }\n\n    cout << \"smallest element is: \" << smallest << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\\que10 }\nsmallest element is: 0"
      },
      {
        "id": 11,
        "filename": "que11.cpp",
        "title": "Program to print the number of elements present in an array",
        "question": "Que 11 : \"Program to print the number of elements present in an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\n\nint main(){\n    int arr[] = {1,2,3,4,5,6,7,8,9,0};\n\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    cout << \"Number of elements in array is: \" << size << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\\que11 }\nNumber of elements in array is: 10"
      },
      {
        "id": 12,
        "filename": "que12.cpp",
        "title": "Program to print the sum of all the items of the array",
        "question": "Que 12 : \"Program to print the sum of all the items of the array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n\n    int arr[] = {0,1,2,3,44,5,6,7,8,9};\n\n    int sum=0;\n\n    for (int i = 0; i < 10; i++){\n        sum+=arr[i];\n    }\n\n    cout << \"The Sum is: \" << sum << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que12.cpp -o que12 } ; if ($?) { .\\que12 }\nThe Sum is: 85"
      },
      {
        "id": 13,
        "filename": "que13.cpp",
        "title": "Program to right rotate the elements of an array",
        "question": "Que 13 : \"Program to right rotate the elements of an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    int lastElement = arr[n - 1];\n\n    for (int i = n - 1; i > 0; i--){\n        arr[i] = arr[i - 1];\n    }\n\n    arr[0] = lastElement;\n\n    cout << \"Array after right rotation:\\n\";\n    for (int i = 0; i < n; i++){\n        cout << arr[i] << \" \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que13.cpp -o que13 } ; if ($?) { .\\que13 }\nEnter number of elements: 6\nEnter 1 element : 1\nEnter 2 element : 2\nEnter 3 element : 3\nEnter 4 element : 4\nEnter 5 element : 4\nEnter 6 element : 5\nArray after right rotation:\n5 1 2 3 4 4"
      },
      {
        "id": 14,
        "filename": "que14.cpp",
        "title": "Program to sort the elements of an array in ascending order",
        "question": "Que 14 : \"Program to sort the elements of an array in ascending order\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    for (int i = 0; i < n - 1; i++){\n        for (int j = 0; j < n - i - 1; j++){\n            if (arr[j] > arr[j + 1]){\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n\n    cout << \"Array in asending order :\\n\";\n    for (int i = 0; i < n; i++){\n        cout << arr[i] << \" \";\n    }\n\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que14.cpp -o que14 } ; if ($?) { .\\que14 }\nEnter number of elements: 6\nEnter 1 element : 3\nEnter 2 element : 4\nEnter 3 element : 78\nEnter 4 element : 90\nEnter 5 element : 4\nEnter 6 element : 56\nArray in asending order :\n3 4 4 56 78 90"
      },
      {
        "id": 15,
        "filename": "que15.cpp",
        "title": "Program to sort the elements of an array in descending order",
        "question": "Que 15 : \"Program to sort the elements of an array in descending order\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    for (int i = 0; i < n - 1; i++){\n        for (int j = 0; j < n - i - 1; j++){\n            if (arr[j] < arr[j + 1]){\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n\n    cout << \"Array in descending order:\\n\";\n    for (int i = 0; i < n; i++){\n        cout << arr[i] << \" \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que15.cpp -o que15 } ; if ($?) { .\\que15 }\nEnter number of elements: 6\nEnter 1 element : 4\nEnter 2 element : 445\nEnter 3 element : 2\nEnter 4 element : 34\nEnter 5 element : 89\nEnter 6 element : 56655\nArray in descending order:\n56655 445 89 34 4 2"
      },
      {
        "id": 16,
        "filename": "que16.cpp",
        "title": "Program to Find 3rd Largest Number in an array",
        "question": "Que 16 : \"Program to Find 3rd Largest Number in an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n < 3 || n > 100){\n        cout << \"Input at least 3 elements \\n\";\n        return 0;\n    }\n\n       for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    for (int i = 0; i < n - 1; i++){\n        for (int j = 0; j < n - i - 1; j++){\n            if (arr[j] < arr[j + 1]){\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n\n    cout << \"3rd largest element is: \" << arr[2] << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que16.cpp -o que16 } ; if ($?) { .\\que16 }\nEnter number of elements: 6\nEnter 1 element : 3\nEnter 2 element : 7\nEnter 3 element : 344\nEnter 4 element : 787\nEnter 5 element : 90\nEnter 6 element : 5\n3rd largest element is: 90"
      },
      {
        "id": 17,
        "filename": "que17.cpp",
        "title": "Program to Find 2nd Largest Number in an array",
        "question": "Que 17 : \"Program to Find 2nd Largest Number in an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n < 2 || n > 100){\n        cout << \"Input  at least 2 elements\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    for (int i = 0; i < n - 1; i++){\n        for (int j = 0; j < n - i - 1; j++){\n            if (arr[j] < arr[j + 1]){\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n\n    cout << \"2nd largest element is: \" << arr[1] << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que17.cpp -o que17 } ; if ($?) { .\\que17 }\nEnter number of elements: 5\nEnter 1 element : 343\nEnter 2 element : 57\nEnter 3 element : 67\nEnter 4 element : 4\nEnter 5 element : 23\n2nd largest element is: 67"
      },
      {
        "id": 18,
        "filename": "que18.cpp",
        "title": "Program to Find Largest Number in an array",
        "question": "Que 18 : \"Program to Find Largest Number in an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n\n    int arr[] = {0,1,2,3,44,5,6,7,8,9};\n\n    int largest = arr[0];\n\n    for (int i = 1; i < 10; i++){\n        if (arr[i] > largest){\n            largest = arr[i];\n        }\n    }\n\n    cout << \"Largest element is: \" << largest << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\\que9 }\nLargest element is: 44"
      },
      {
        "id": 19,
        "filename": "que19.cpp",
        "title": "C++ Program Find 2nd Smallest Number in an array",
        "question": "Que 19 : \"C++ Program Find 2nd Smallest Number in an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n < 2 || n > 100){\n        cout << \"Need at least 2 elements\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    for (int i = 0; i < n - 1; i++){\n        for (int j = 0; j < n - i - 1; j++){\n            if (arr[j] > arr[j + 1]){\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n\n    cout << \"2nd smallest element is: \" << arr[1] << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que19.cpp -o que19 } ; if ($?) { .\\que19 }\nEnter number of elements: 5\nEnter 1 element : 343\nEnter 2 element : 56\nEnter 3 element : 9\nEnter 4 element : 0\nEnter 5 element : 45\n2nd smallest element is: 9"
      },
      {
        "id": 20,
        "filename": "que20.cpp",
        "title": "Program to Find Smallest Number in an array",
        "question": "Que 20 : \"Program to Find Smallest Number in an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n\n    int arr[] = {0,1,2,3,44,5,6,7,8,9};\n\n    int smallest = arr[0];\n\n    for (int i = 1; i < 10; i++){\n        if (arr[i] < smallest){\n            smallest = arr[i];\n        }\n    }\n\n    cout << \"smallest element is: \" << smallest << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\\que10 }\nsmallest element is: 0"
      },
      {
        "id": 21,
        "filename": "que21.cpp",
        "title": "Program to Remove Duplicate Element in an array",
        "question": "Que 21 : \"Program to Remove Duplicate Element in an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n,  uniqueCount = 0;\n    int arr[100];\n    int uniqueArr[100];\n\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    for (int i = 0; i < n; i++){\n        int isDuplicate = 0;\n\n        for (int j = 0; j < uniqueCount; j++){\n            if (arr[i] == uniqueArr[j]){\n                isDuplicate = 1;\n                break;\n            }\n        }\n\n        if (isDuplicate == 0){\n            uniqueArr[uniqueCount] = arr[i];\n            uniqueCount++;\n        }\n    }\n\n    cout << \"Array after removing \\n\";\n    for (int i = 0; i < uniqueCount; i++){\n        cout << uniqueArr[i] << \" \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que21.cpp -o que21 } ; if ($?) { .\\que21 }\nEnter number of elements: 8\nEnter 1 element : 2\nEnter 2 element : 1\nEnter 3 element : 2\nEnter 4 element : 4\nEnter 5 element : 5\nEnter 6 element : 5\nEnter 7 element : 7\nEnter 8 element : 8\nArray after removing \n2 1 4 5 7 8"
      },
      {
        "id": 22,
        "filename": "que22.cpp",
        "title": "Program to Print Odd and Even Numbers from an array",
        "question": "Que 22 : \"Program to Print Odd and Even Numbers from an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int arr[10] = {1,2,3,4,4,4,4,9,9,999};\n\n    cout << \"Even numbers are:\\n\";\n    for (int i = 0; i < 10; i++){\n        if (arr[i] % 2 == 0){\n            cout << arr[i] << \" \";\n        }\n    }\n\n    cout << \"\\nOdd numbers are:\\n\";\n    for (int i = 0; i < 10; i++){\n        if (arr[i] % 2 != 0){\n            cout << arr[i] << \" \";\n        }\n    }\n\n    cout << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que22.cpp -o que22 } ; if ($?) { .\\que22 }\nEven numbers are:\n2 4 4 4 4\nOdd numbers are:\n1 3 9 9 999"
      },
      {
        "id": 23,
        "filename": "que23.cpp",
        "title": "Write a C++ program to swap the first and last elements of an array and create a new array",
        "question": "Que 23 : \"Write a C++ program to swap the first and last elements of an array and create a new array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n    int newArr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n        newArr[i] = arr[i];\n    }\n\n    if (n > 1){\n        int temp = newArr[0];\n        newArr[0] = newArr[n - 1];\n        newArr[n - 1] = temp;\n    }\n\n    cout << \"New array after swappiing :\\n\";\n    for (int i = 0; i < n; i++){\n        cout << newArr[i] << \" \";\n    }\n\n    cout << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que23.cpp -o que23 } ; if ($?) { .\\que23 }\nEnter number of elements: 9\nEnter 1 element : 3333\nEnter 2 element : 4\nEnter 3 element : 4\nEnter 4 element : 6\nEnter 5 element : 8\nEnter 6 element : 3\nEnter 7 element : 24\nEnter 8 element : 4\nEnter 9 element : 9000\nNew array after swappiing :\n9000 4 4 6 8 3 24 4 3333"
      },
      {
        "id": 24,
        "filename": "que24.cpp",
        "title": "Write a C++ program to count the number of even and odd elements in a given array",
        "question": "Que 24 : \"Write a C++ program to count the number of even and odd elements in a given array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\n\n\n\nint main(){\n\n        int evenCount = 0;\n    int oddCount = 0;\n    int arr[10] = {1,2,3,4,4,4,4,9,9,999};\n\n\n    for (int i = 0; i < 10; i++){\n        if (arr[i] % 2 == 0){\n            evenCount++;\n        }\n    }\n\n    for (int i = 0; i < 10; i++){\n        if (arr[i] % 2 != 0){\n            oddCount++;\n        }\n    }\n\n\n    cout << \"Even elements count: \" << evenCount << \"\\n\";\n    cout << \"Odd elements count: \" << oddCount << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que24.cpp -o que24 } ; if ($?) { .\\que24 }\nEven elements count: 5\nOdd elements count: 5"
      },
      {
        "id": 25,
        "filename": "que25.cpp",
        "title": "Write a C++ program to sum values of an array",
        "question": "Que 25 : \"Write a C++ program to sum values of an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n    int sum = 0;\n\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size \\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter element no \"<< i+1 << \" : \";\n        cin >> arr[i];\n        sum += arr[i];\n    }\n\n    cout << \"Sum of array values is : \" << sum << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que25.cpp -o que25 } ; if ($?) { .\\que25 }\nEnter number of elements: 6\nEnter element no 1 : 4\nEnter element no 2 : 54\nEnter element no 3 : 54\nEnter element no 4 : 90\nEnter element no 5 : 54\nEnter element no 6 : 6\nSum of array values is : 262"
      },
      {
        "id": 26,
        "filename": "que26.cpp",
        "title": "Write a C++ program to find the index of an array element",
        "question": "Que 26 : \"Write a C++ program to find the index of an array element\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n    int key;\n    int foundIndex = -1;\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter element no \"<< i+1 << \" : \";\n        cin >> arr[i];\n    }\n\n    cout << \"Enter the element to search : \";\n    cin >> key;\n\n    for (int i = 0; i < n; i++){\n        if (arr[i] == key){\n            foundIndex = i;\n            break;\n        }\n    }\n\n    if (foundIndex != -1){\n        cout << \"Element found at index : \" << foundIndex << \"\\n\";\n    }\n\n    if (foundIndex == -1){\n        cout << \"Element not found \\n\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que26.cpp -o que26 } ; if ($?) { .\\que26 }\nEnter number of elements: 6\nEnter element no 1 : 45\nEnter element no 2 : 56\nEnter element no 3 : 5\nEnter element no 4 : 56\nEnter element no 5 : 65\nEnter element no 6 : 67\nEnter the element to search : 5\nElement found at index : 2"
      },
      {
        "id": 27,
        "filename": "que27.cpp",
        "title": "Write a C++ program to calculate the average value of array elements",
        "question": "Que 27 : \"Write a C++ program to calculate the average value of array elements\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n    int sum = 0;\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter element no \"<< i+1 << \" : \";\n        cin >> arr[i];\n        sum += arr[i];\n    }\n\n    cout << \"Average value is: \" << sum / n << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que27.cpp -o que27 } ; if ($?) { .\\que27 }\nEnter number of elements: 5\nEnter element no 1 : 3434\nEnter element no 2 : 34\nEnter element no 3 : 6\nEnter element no 4 : 86\nEnter element no 5 : 8\nAverage value is: 713"
      },
      {
        "id": 28,
        "filename": "que28.cpp",
        "title": "Write a C++ program to test if an array contains a specific value",
        "question": "Que 28 : \"Write a C++ program to test if an array contains a specific value\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n    int key;\n    int foundIndex = -1;\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter element no \"<< i+1 << \" : \";\n        cin >> arr[i];\n    }\n\n    cout << \"Enter the element to search : \";\n    cin >> key;\n\n    for (int i = 0; i < n; i++){\n        if (arr[i] == key){\n            foundIndex = i;\n            break;\n        }\n    }\n\n    if (foundIndex != -1){\n        cout << \"Element found at index : \" << foundIndex << \"\\n\";\n    }\n\n    if (foundIndex == -1){\n        cout << \"Element not found \\n\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que26.cpp -o que26 } ; if ($?) { .\\que26 }\nEnter number of elements: 6\nEnter element no 1 : 45\nEnter element no 2 : 56\nEnter element no 3 : 5\nEnter element no 4 : 56\nEnter element no 5 : 65\nEnter element no 6 : 67\nEnter the element to search : 5\nElement found at index : 2"
      },
      {
        "id": 29,
        "filename": "que29.cpp",
        "title": "Write a C++ program to find the maximum and minimum value of an array",
        "question": "Que 29 : \"Write a C++ program to find the maximum and minimum value of an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int arr[] = {0,1,2,3,44,5,6,7,8,9};\n\n    int largest = arr[0];\n    int smallest = arr[0];\n\n    for (int i = 1; i < 10; i++){\n        if (arr[i] > largest){\n            largest = arr[i];\n        }\n        if (arr[i] < smallest){\n            smallest = arr[i];\n        }\n    }\n\n    cout << \"smallest element is: \" << smallest << \"\\n\";\n    \n\n    cout << \"Largest element is: \" << largest << \"\\n\";\n    \n\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que29.cpp -o que29 } ; if ($?) { .\\que29 }\nsmallest element is: 0\nLargest element is: 44"
      },
      {
        "id": 30,
        "filename": "que30.cpp",
        "title": "Write a C++ program to insert an element (specific position) into an array",
        "question": "Que 30 : \"Write a C++ program to insert an element (specific position) into an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[101];\n    int position;\n    int value;\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n < 0 || n >= 101){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter element no \"<< i+1 << \" : \";\n        cin >> arr[i];\n    }\n\n    cout << \"Enter position (0 to \" << n << \"): \";\n    cin >> position;\n\n    if (position < 0 || position > n){\n        cout << \"Invalid position\\n\";\n        return 0;\n    }\n\n    cout << \"Enter value to insert : \";\n    cin >> value;\n\n    for (int i = n; i > position; i--){\n        arr[i] = arr[i - 1];\n    }\n\n    arr[position] = value;\n    n++;\n\n    cout << \"Array after insertion:\\n\";\n    for (int i = 0; i < n; i++){\n        cout << arr[i] << \" \";\n    }\n\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que30.cpp -o que30 } ; if ($?) { .\\que30 }\nEnter number of elements: 8\nEnter element no 1 : 3\nEnter element no 2 : 4\nEnter element no 3 : 5\nEnter element no 4 : 5\nEnter element no 5 : 6\nEnter element no 6 : 7\nEnter element no 7 : 3\nEnter element no 8 : 8\nEnter position (0 to 8): 6\nEnter value to insert : 666 \nArray after insertion:\n3 4 5 5 6 7 666 3 8"
      },
      {
        "id": 31,
        "filename": "que31.cpp",
        "title": "Write a C++ program to reverse an array of integer values",
        "question": "Que 31 : \"Write a C++ program to reverse an array of integer values\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter element no \"<< i+1 << \" : \";\n        cin >> arr[i];\n    }\n\n    int start = 0;\n    int end = n - 1;\n\n    while (start < end){\n        int temp = arr[start];\n        arr[start] = arr[end];\n        arr[end] = temp;\n        start++;\n        end--;\n    }\n\n    cout << \"Reversed array isn  :\\n\";\n    for (int i = 0; i < n; i++){\n        cout << arr[i] << \" \";\n    }\n\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que31.cpp -o que31 } ; if ($?) { .\\que31 }\nEnter number of elements: 6\nEnter element no 1 : 12\nEnter element no 2 : 34\nEnter element no 3 : 45\nEnter element no 4 : 67\nEnter element no 5 : 54\nEnter element no 6 : 67\nReversed array isn  :\n67 54 67 45 34 12"
      },
      {
        "id": 32,
        "filename": "que32.cpp",
        "title": "Write a C++ program to find the common elements between two arrays",
        "question": "Que 32 : \"Write a C++ program to find the common elements between two arrays\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n1;\n    int n2;\n    int arr1[100];\n    int arr2[100];\n    int printed[100] = {0};\n\n    cout << \"Enter number of elements in first array: \";\n    cin >> n1;\n\n    cout << \"Enter number of elements in second array: \";\n    cin >> n2;\n\n    if (n1 <= 0 || n1 > 100 || n2 <= 0 || n2 > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\nfor (int i = 0; i < n1; i++){\n        cout << \"Enter element no \"<< i+1 << \" : \";\n        cin >> arr1[i];\n    }\n\n\nfor (int i = 0; i < n2; i++){\n        cout << \"Enter element no \"<< i+1 << \" : \";\n        cin >> arr2[i];\n    }\n\n\n    cout << \"Common elements are:\\n\";\n    int hasCommon = 0;\n\n    for (int i = 0; i < n1; i++){\n        int alreadyPrinted = 0;\n        for (int k = 0; k < i; k++){\n            if (arr1[i] == arr1[k]){\n                alreadyPrinted = 1;\n                break;\n            }\n        }\n\n        if (alreadyPrinted == 1){\n            continue;\n        }\n\n        for (int j = 0; j < n2; j++){\n            if (arr1[i] == arr2[j]){\n                cout << arr1[i] << \" \";\n                hasCommon = 1;\n                break;\n            }\n        }\n    }\n\n    if (hasCommon == 0){\n        cout << \"No common elements\";\n    }\n\n    return 0;\n}",
        "output": ""
      },
      {
        "id": 33,
        "filename": "que33.cpp",
        "title": "Write a C++ program to find the duplicate values of an array of integer values",
        "question": "Que 33 : \"Write a C++ program to find the duplicate values of an array of integer values\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n,  uniqueCount = 0;\n    int arr[100];\n    int uniqueArr[100];\n\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    for (int i = 0; i < n; i++){\n        int isDuplicate = 0;\n\n        for (int j = 0; j < uniqueCount; j++){\n            if (arr[i] == uniqueArr[j]){\n                isDuplicate = 1;\n                break;\n            }\n        }\n\n        if (isDuplicate == 0){\n            uniqueArr[uniqueCount] = arr[i];\n            uniqueCount++;\n        }\n    }\n\n    cout << \"Array after removing \\n\";\n    for (int i = 0; i < uniqueCount; i++){\n        cout << uniqueArr[i] << \" \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que21.cpp -o que21 } ; if ($?) { .\\que21 }\nEnter number of elements: 8\nEnter 1 element : 2\nEnter 2 element : 1\nEnter 3 element : 2\nEnter 4 element : 4\nEnter 5 element : 5\nEnter 6 element : 5\nEnter 7 element : 7\nEnter 8 element : 8\nArray after removing \n2 1 4 5 7 8"
      },
      {
        "id": 34,
        "filename": "que34.cpp",
        "title": "Write a C++ program to find second largest number from the array",
        "question": "Que 34 : \"Write a C++ program to find second largest number from the array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n < 2 || n > 100){\n        cout << \"Input  at least 2 elements\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    for (int i = 0; i < n - 1; i++){\n        for (int j = 0; j < n - i - 1; j++){\n            if (arr[j] < arr[j + 1]){\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n\n    cout << \"2nd largest element is: \" << arr[1] << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que17.cpp -o que17 } ; if ($?) { .\\que17 }\nEnter number of elements: 5\nEnter 1 element : 343\nEnter 2 element : 57\nEnter 3 element : 67\nEnter 4 element : 4\nEnter 5 element : 23\n2nd largest element is: 67"
      },
      {
        "id": 35,
        "filename": "que35.cpp",
        "title": "Write a C++ program to find second lowest number from the array",
        "question": "Que 35 : \"Write a C++ program to find second lowest number from the array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n < 2 || n > 100){\n        cout << \"Need at least 2 elements\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    for (int i = 0; i < n - 1; i++){\n        for (int j = 0; j < n - i - 1; j++){\n            if (arr[j] > arr[j + 1]){\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n\n    cout << \"2nd smallest element is: \" << arr[1] << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que19.cpp -o que19 } ; if ($?) { .\\que19 }\nEnter number of elements: 5\nEnter 1 element : 343\nEnter 2 element : 56\nEnter 3 element : 9\nEnter 4 element : 0\nEnter 5 element : 45\n2nd smallest element is: 9"
      },
      {
        "id": 36,
        "filename": "que36.cpp",
        "title": "Write a C++ program to find the number of even and odd integers in a given array of integers",
        "question": "Que 36 : \"Write a C++ program to find the number of even and odd integers in a given array of integers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\n\n\n\nint main(){\n\n        int evenCount = 0;\n    int oddCount = 0;\n    int arr[10] = {1,2,3,4,4,4,4,9,9,999};\n\n\n    for (int i = 0; i < 10; i++){\n        if (arr[i] % 2 == 0){\n            evenCount++;\n        }\n    }\n\n    for (int i = 0; i < 10; i++){\n        if (arr[i] % 2 != 0){\n            oddCount++;\n        }\n    }\n\n\n    cout << \"Even elements count: \" << evenCount << \"\\n\";\n    cout << \"Odd elements count: \" << oddCount << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que24.cpp -o que24 } ; if ($?) { .\\que24 }\nEven elements count: 5\nOdd elements count: 5"
      },
      {
        "id": 37,
        "filename": "que37.cpp",
        "title": "Write a C++ program to get the difference between the largest and smallest values in an array of integers",
        "question": "Que 37 : \"Write a C++ program to get the difference between the largest and smallest values in an array of integers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int arr[] = {0,1,2,3,44,5,6,7,8,9};\n\n    int largest = arr[0];\n    int smallest = arr[0];\n\n    for (int i = 1; i < 10; i++){\n        if (arr[i] > largest){\n            largest = arr[i];\n        }\n        if (arr[i] < smallest){\n            smallest = arr[i];\n        }\n    }\n\ncout << \"Difference is \" << largest-smallest << endl ;\n    \n\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que37.cpp -o que37 } ; if ($?) { .\\que37 }\nDifference is 44\nPS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43>"
      },
      {
        "id": 38,
        "filename": "que38.cpp",
        "title": "Write a C++ program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s",
        "question": "Que 38 : \"Write a C++ program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    cout << \"Enter \" << n << \" elements (only 0 and 1):\\n\";\n    for (int i = 0; i < n; i++){\n        cin >> arr[i];\n\n        if (arr[i] != 0 && arr[i] != 1){\n            cout << \"Invalid input\\n\";\n            return 0;\n        }\n    }\n\n    int left = 0;\n    int right = n - 1;\n\n    while (left < right){\n        while (left < right && arr[left] == 0){\n            left++;\n        }\n\n        while (left < right && arr[right] == 1){\n            right--;\n        }\n\n        if (left < right){\n            int temp = arr[left];\n            arr[left] = arr[right];\n            arr[right] = temp;\n            left++;\n            right--;\n        }\n    }\n\n    cout << \"Array after segregation:\\n\";\n    for (int i = 0; i < n; i++){\n        cout << arr[i] << \" \";\n    }\n\n    cout << \"\\n\";\n    return 0;\n}",
        "output": ""
      },
      {
        "id": 39,
        "filename": "que39.cpp",
        "title": "Write a C++ program to cyclically rotate a given array clockwise by one",
        "question": "Que 39 : \"Write a C++ program to cyclically rotate a given array clockwise by one\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    int lastElement = arr[n - 1];\n\n    for (int i = n - 1; i > 0; i--){\n        arr[i] = arr[i - 1];\n    }\n\n    arr[0] = lastElement;\n\n    cout << \"Array after right rotation:\\n\";\n    for (int i = 0; i < n; i++){\n        cout << arr[i] << \" \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que13.cpp -o que13 } ; if ($?) { .\\que13 }\nEnter number of elements: 6\nEnter 1 element : 1\nEnter 2 element : 2\nEnter 3 element : 3\nEnter 4 element : 4\nEnter 5 element : 4\nEnter 6 element : 5\nArray after right rotation:\n5 1 2 3 4 4"
      },
      {
        "id": 40,
        "filename": "que40.cpp",
        "title": "Write a C++ program to print all unique element in an array",
        "question": "Que 40 : \"Write a C++ program to print all unique element in an array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    cout << \"Enter \" << n << \" elements:\\n\";\n    for (int i = 0; i < n; i++){\n        cin >> arr[i];\n    }\n\n    cout << \"Unique elements are:\\n\";\n    int hasUnique = 0;\n\n    for (int i = 0; i < n; i++){\n        int count = 0;\n\n        for (int j = 0; j < n; j++){\n            if (arr[i] == arr[j]){\n                count++;\n            }\n        }\n\n        if (count == 1){\n            cout << arr[i] << \" \";\n            hasUnique = 1;\n        }\n    }\n\n    if (hasUnique == 0){\n        cout << \"No unique elements\";\n    }\n\n    cout << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que40.cpp -o que40 } ; if ($?) { .\\que40 }\nEnter number of elements: 6\nEnter 6 elements:\n4\n4\n5\n7\n7\n8\nUnique elements are:\n5 8"
      },
      {
        "id": 41,
        "filename": "que41.cpp",
        "title": "Write a C++ Program to Sort the Array in an Ascending Order",
        "question": "Que 41 : \"Write a C++ Program to Sort the Array in an Ascending Order\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    for (int i = 0; i < n - 1; i++){\n        for (int j = 0; j < n - i - 1; j++){\n            if (arr[j] > arr[j + 1]){\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n\n    cout << \"Array in asending order :\\n\";\n    for (int i = 0; i < n; i++){\n        cout << arr[i] << \" \";\n    }\n\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que14.cpp -o que14 } ; if ($?) { .\\que14 }\nEnter number of elements: 6\nEnter 1 element : 3\nEnter 2 element : 4\nEnter 3 element : 78\nEnter 4 element : 90\nEnter 5 element : 4\nEnter 6 element : 56\nArray in asending order :\n3 4 4 56 78 90"
      },
      {
        "id": 42,
        "filename": "que42.cpp",
        "title": "Write a C++ Program to Sort the Array in an Descending Order",
        "question": "Que 42 : \"Write a C++ Program to Sort the Array in an Descending Order\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter \" << i  + 1 << \" element : \";\n        cin >> arr[i];\n    }\n\n    for (int i = 0; i < n - 1; i++){\n        for (int j = 0; j < n - i - 1; j++){\n            if (arr[j] < arr[j + 1]){\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n\n    cout << \"Array in descending order:\\n\";\n    for (int i = 0; i < n; i++){\n        cout << arr[i] << \" \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que15.cpp -o que15 } ; if ($?) { .\\que15 }\nEnter number of elements: 6\nEnter 1 element : 4\nEnter 2 element : 445\nEnter 3 element : 2\nEnter 4 element : 34\nEnter 5 element : 89\nEnter 6 element : 56655\nArray in descending order:\n56655 445 89 34 4 2"
      },
      {
        "id": 43,
        "filename": "que43.cpp",
        "title": "Write a C++ Program to Search Key Elements in an Array",
        "question": "Que 43 : \"Write a C++ Program to Search Key Elements in an Array\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int arr[100];\n    int key;\n    int foundIndex = -1;\n\n    cout << \"Enter number of elements: \";\n    cin >> n;\n\n    if (n <= 0 || n > 100){\n        cout << \"Invalid size\\n\";\n        return 0;\n    }\n\n    for (int i = 0; i < n; i++){\n        cout << \"Enter element no \"<< i+1 << \" : \";\n        cin >> arr[i];\n    }\n\n    cout << \"Enter the element to search : \";\n    cin >> key;\n\n    for (int i = 0; i < n; i++){\n        if (arr[i] == key){\n            foundIndex = i;\n            break;\n        }\n    }\n\n    if (foundIndex != -1){\n        cout << \"Element found at index : \" << foundIndex << \"\\n\";\n    }\n\n    if (foundIndex == -1){\n        cout << \"Element not found \\n\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43\\\" ; if ($?) { g++ que26.cpp -o que26 } ; if ($?) { .\\que26 }\nEnter number of elements: 6\nEnter element no 1 : 45\nEnter element no 2 : 56\nEnter element no 3 : 5\nEnter element no 4 : 56\nEnter element no 5 : 65\nEnter element no 6 : 67\nEnter the element to search : 5\nElement found at index : 2"
      }
    ]
  },
  {
    "id": 2,
    "slug": "functions",
    "title": "Functions",
    "subtitle": "7 Problems",
    "description": "Curated C++ practice problems focused on functions concepts and patterns.",
    "questions": [
      {
        "id": 1,
        "filename": "que1.cpp",
        "title": "Write a C++ method to find the smallest number among three numbers.",
        "question": "Que 1 : \"Write a C++ method to find the smallest number among three numbers.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint smallestNumber(int a, int b, int c){\n\n    int smallest = a;\n\n    if (b < smallest){\n        smallest = b;\n    }\n\n    if (c < smallest){\n        smallest = c;\n    }\n\n    return smallest;\n}\n\n\nint main(){\n\n    int a;\n    int b;\n    int c;\n\n    cout << \"Enter three numbers: \";\n    cin >> a >> b >> c;\n\n    cout << \"Smallest number is: \" << smallestNumber(a, b, c) << \"\\n\";\n    return 0;\n}\n\n\n// PS D:\\dx\\Coding\\C++\\CPP_Que\\01-Single_Dimension_Arrays_43> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\02-Functions_7\\\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\\que1 }",
        "output": "Enter three numbers: 3\n6\n8\nSmallest number is: 3"
      },
      {
        "id": 2,
        "filename": "que2.cpp",
        "title": "Write a C++ method to compute the average of three numbers.",
        "question": "Que 2 : \"Write a C++ method to compute the average of three numbers.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint averageOfThree(int a, int b, int c){\n\n    int sum = a + b + c;\n    int average = sum / 3;\n    return average;\n}\n\n\nint main(){\n\n    int a;\n    int b;\n    int c;\n\n    cout << \"Enter three numbers: \";\n    cin >> a >> b >> c;\n\n    cout << \"Average is: \" << averageOfThree(a, b, c) << \"\\n\";\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\02-Functions_7> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\02-Functions_7\\\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\\que2 }\nEnter three numbers: 4\n5\n6\nAverage is: 5"
      },
      {
        "id": 3,
        "filename": "que3.cpp",
        "title": "Write a C++ method to display the middle character of a string.",
        "question": "Que 3 : \"Write a C++ method to display the middle character of a string.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nchar middleCharacter(string text){\n\n    int length = text.length();\n    int middleIndex = length / 2;\n    return text[middleIndex];\n}\n\n\nint main(){\n\n    string text;\n\n    cout << \"Enter a string: \";\n    cin >> text;\n\n    if (text.length() == 0){\n        cout << \"String is empty\\n\";\n        return 0;\n    }\n\n    cout << \"Middle character od: \"<< text << \" is \" << middleCharacter(text) ;\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\02-Functions_7> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\02-Functions_7\\\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\\que3 }\nEnter a string: hello \nMiddle character od: hello is l"
      },
      {
        "id": 4,
        "filename": "que4.cpp",
        "title": "Write a C++ method to find all twin prime numbers less than 100.",
        "question": "Que 4 : \"Write a C++ method to find all twin prime numbers less than 100.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nbool isPrime(int number){\n\n    if (number < 2){\n        return false;\n    }\n\n    for (int i = 2; i * i <= number; i++){\n        if (number % i == 0){\n            return false;\n        }\n    }\n\n    return true;\n}\n\n\nvoid printTwinPrimes(){\n\n    for (int i = 2; i < 100; i++){\n        if (isPrime(i) && isPrime(i + 2) && i + 2 < 100){\n            cout << \"(\" << i << \", \" << i + 2 << \")\\n\";\n        }\n    }\n}\n\n\nint main(){\n\n    cout << \"Twin prime numbers less than 100 are:\\n\";\n    printTwinPrimes();\n\n    return 0;\n}",
        "output": "PS D:\\dx\\Coding\\C++\\CPP_Que\\02-Functions_7> cd \"d:\\dx\\Coding\\C++\\CPP_Que\\02-Functions_7\\\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\\que4 }\nTwin prime numbers less than 100 are:\n(3, 5)\n(5, 7)\n(11, 13)\n(17, 19)\n(29, 31)\n(41, 43)\n(59, 61)\n(71, 73)"
      },
      {
        "id": 5,
        "filename": "que5.cpp",
        "title": "Write a C++ method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative.",
        "question": "Que 5 : \"Write a C++ method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint countDigitTwo(int number){\n\n    int count = 0;\n\n    if (number == 0){\n        return 0;\n    }\n\n    while (number > 0){\n        if (number % 10 == 2){\n            count++;\n        }\n\n        number = number / 10;\n    }\n    return count;\n}\n\n\nint main(){\n\n    int number;\n\n    cout << \"Enter a non-negative integer: \";\n    cin >> number;\n    cout << \"Count of digit 2 is : \" << countDigitTwo(number);\n    return 0;\n}",
        "output": "PS F:\\dddddddd\\CPP_Que\\02-Functions_7> cd \"f:\\dddddddd\\CPP_Que\\02-Functions_7\\\" ; if ($?) { g++ que5.cpp -o que5 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\que5 }\nEnter a non-negative integer: 23422\nCount of digit 2 is : 3"
      },
      {
        "id": 6,
        "filename": "que6.cpp",
        "title": "Write a C++ method that accepts three integers and checks whether they are consecutive or not. Returns true or false.",
        "question": "Que 6 : \"Write a C++ method that accepts three integers and checks whether they are consecutive or not. Returns true or false.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nbool areConsecutive(int a, int b, int c){\n\n    if (b == a + 1 && c == b + 1){\n        return true;\n    }\n    return false;\n}\n\n\nint main(){\n\n    int a;\n    int b;\n    int c;\n\n    cout << \"Enter three integers: \";\n    cin >> a >> b >> c;\n\n    if (areConsecutive(a, b, c)){\n        cout << \"Yes \";\n    }\n\n    if (!areConsecutive(a, b, c)){\n        cout << \"Not consective \";\n    }\n\n    return 0;\n}",
        "output": "PS F:\\dddddddd\\CPP_Que\\02-Functions_7> cd \"f:\\dddddddd\\CPP_Que\\02-Functions_7\\\" ; if ($?) { g++ que6.cpp -o que6 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\que6 }\nEnter three integers: 3\n4\n5\nYes"
      },
      {
        "id": 7,
        "filename": "que7.cpp",
        "title": "Write a C++ method that checks whether all the characters in a given string are vowels (a,e,i,o,u) or not. Return true if each character in the string is a vowel, otherwise return false.",
        "question": "Que 7 : \"Write a C++ +method that text[i]ecks whether all the text[i]aracters in a given string are vowels (a,e,i,o,u) or not. Return true if eatext[i] text[i]aracter in the string is a vowel, otherwise return false.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nbool allVowels(string text){\n\n\n    for (int i = 0; i < text.length(); i++){\n\n\n        if (text[i] != 'a' && text[i] != 'e' && text[i] != 'i' && text[i] != 'o' && text[i] != 'u' && text[i] != 'A' && text[i] != 'E' && text[i] != 'I' && text[i] != 'O' && text[i] != 'U'){\n            return false;\n        }\n    }\n\n    return true;\n}\n\n\nint main(){\n\n    string text;\n\n    cout << \"Enter a string: \";\n    cin >> text;\n\n    if (allVowels(text)){\n        cout << \"Yes \";\n    }\n\n    if (!allVowels(text)){\n        cout << \"No \";\n    }\n\n    return 0;\n}",
        "output": "PS F:\\dddddddd\\CPP_Que\\02-Functions_7> cd \"f:\\dddddddd\\CPP_Que\\02-Functions_7\\\" ; if ($?) { g++ que7.cpp -o que7 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\que7 }\nEnter a string: AEUIO\nYes"
      }
    ]
  },
  {
    "id": 3,
    "slug": "strings",
    "title": "Strings",
    "subtitle": "12 Problems",
    "description": "Curated C++ practice problems focused on strings concepts and patterns.",
    "questions": [
      {
        "id": 1,
        "filename": "que1.cpp",
        "title": "Program to Check Anagram",
        "question": "Que 1 : \"Program to Check Anagram\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nbool isAnagram(string first, string second){\n\n    if (first.length() != second.length()){\n        return false;\n    }\n\n    int freq[26] = {0};\n\n    for (int i = 0; i < first.length(); i++){\n        freq[first[i] - 'a']++;\n        freq[second[i] - 'a']--;\n    }\n\n    for (int i = 0; i < 26; i++){\n        if (freq[i] != 0){\n            return false;\n        }\n    }\n\n    return true;\n}\n\n\nint main(){\n\n    string first;\n    string second;\n\n    cout << \"Enter first string: \";\n    cin >> first;\n\n    cout << \"Enter second string: \";\n    cin >> second;\n\n    if (isAnagram(first, second)){\n        cout << \"Anagram\";\n    }\n\n    if (!isAnagram(first, second)){\n        cout << \"Not anagram\";\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\03-Strings_39> cd \"e:\\dddddddd\\CPP_Que\\03-Strings_39\\\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\\que1 }\nEnter first string: listen\nEnter second string: silent\nAnagram"
      },
      {
        "id": 2,
        "filename": "que2.cpp",
        "title": "Program to Swapping Pair of Characters",
        "question": "Que 2 : \"Program to Swapping Pair of Characters\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n\n    cout << \"Enter a string: \";\n    cin >> text;\n\n    // a h k h d\n    // 0 1 2 3 4 \n\n    for (int i = 0; i + 1 < (int)text.length(); i += 2){\n        char temp = text[i];\n        text[i] = text[i + 1];\n        text[i + 1] = temp;\n    }\n\n    cout << \"After swapping pair of characters: \" << text ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\03-Strings_39> cd \"e:\\dddddddd\\CPP_Que\\03-Strings_39\\\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\\que2 }\nEnter a string: strings \nAfter swapping pair of characters: tsirgns"
      },
      {
        "id": 3,
        "filename": "que3.cpp",
        "title": "Program to Check if a String contains only digits?",
        "question": "Que 3 : \"Program to Check if a String contains only digits?\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nbool onlyDigits(string text){\n\n    if (text.length() == 0){\n        return false;\n    }\n\n    for (int i = 0; i < text.length(); i++){\n        if (text[i] < '0' || text[i] > '9'){\n            return false;\n        }\n    }\n\n    return true;\n}\n\n\nint main(){\n\n    string text;\n\n    cout << \"Enter a string: \";\n    cin >> text;\n\n    if (onlyDigits(text)){\n        cout << \"Yes\";\n    }\n\n    if (!onlyDigits(text)){\n        cout << \"No \";\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\03-Strings_39> cd \"e:\\dddddddd\\CPP_Que\\03-Strings_39\\\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\\que3 }\nEnter a string: 44534332343\nYes"
      },
      {
        "id": 4,
        "filename": "que4.cpp",
        "title": "Program to perform Deep Copy for String?",
        "question": "Que 4 : \"Program to perform Deep Copy for String?\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string original;\n    string copied = \"\";\n\n    cout << \"Enter a string: \";\n    cin >> original;\n\n    for (int i = 0; i < original.length(); i++){\n        copied += original[i];\n    }\n\n    cout << \"Original string: \" << original << \"\\n\";\n    cout << \"Copied string: \" << copied ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\03-Strings_39> cd \"e:\\dddddddd\\CPP_Que\\03-Strings_39\\\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\\que4 }\nEnter a string: helllo\nOriginal string: helllo\nCopied string: helllo"
      },
      {
        "id": 5,
        "filename": "que5.cpp",
        "title": "Program to remove all occurrences of a given character from input String?",
        "question": "Que 5 : \"Program to remove all occurrences of a given character from input String?\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n    char ch;\n    string result = \"\";\n\n    cout << \"Enter a string: \";\n    cin >> text;\n\n    cout << \"Enter character to remove: \";\n    cin >> ch;\n\n    for (int i = 0; i < text.length(); i++){\n        if (text[i] != ch){\n            result += text[i];\n        }\n    }\n\n    cout << \"String after removal: \" << result ;\n    return 0;\n}\n\n\nPS E:\\dddddddd\\CPP_Que\\03/",
        "output": ""
      },
      {
        "id": 6,
        "filename": "que6.cpp",
        "title": "Program to Add Characters to a String",
        "question": "Que 6 : \"Program to Add Characters to a String\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n    string extra;\n\n    cout << \"Enter base string: \";\n    cin >> text;\n\n    cout << \"Enter characters to add: \";\n    cin >> extra;\n\n    text += extra;\n\n    cout << \"Updated string: \" << text ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\03-Strings_39> cd \"e:\\dddddddd\\CPP_Que\\03-Strings_39\\\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?) { .\\que6 }\nEnter base string: hello \nEnter characters to add: ooooo\nUpdated string: helloooooo"
      },
      {
        "id": 7,
        "filename": "que7.cpp",
        "title": "Program to check whether a string is a Palindrome",
        "question": "Que 7 : \"Program to check whether a string is a Palindrome\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\n// e e l l e e \n// 0 1 2 3 4 5 \n\nbool isPalindrome(string text){\n\n    int start = 0;\n    int end = text.length() - 1;\n\n    while (start < end){\n        if (text[start] != text[end]){\n            return false;\n        }\n\n        start++;\n        end--;\n    }\n\n    return true;\n}\n\n\nint main(){\n\n    string text;\n\n    cout << \"Enter a string : \";\n    cin >> text;\n\n    if (isPalindrome(text)){\n        cout << \"Palindrome \";\n    }\n\n    if (!isPalindrome(text)){\n        cout << \"Not palindrome\";\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\03-Strings_39> cd \"e:\\dddddddd\\CPP_Que\\03-Strings_39\\\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\\que7 }\nEnter a string : ellelle\nPalindrome"
      },
      {
        "id": 8,
        "filename": "que8.cpp",
        "title": "Program to Convert Enum to String",
        "question": "Que 8 : \"Program to Convert Enum to String\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;",
        "output": ""
      },
      {
        "id": 9,
        "filename": "que9.cpp",
        "title": "Program to count number of words in a String?",
        "question": "Que 9 : \"Program to count number of words in a String?\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint countWords(string text){\n\n    int words = 0;\n    int inWord = 0;\n\n    for (int i = 0; i < text.length(); i++){\n        if (text[i] != ' ' && text[i] != '\\t' && text[i] != '\\n'){\n            if (inWord == 0){\n                words++;\n                inWord = 1;\n            }\n        }\n\n        if (text[i] == ' ' || text[i] == '\\t' || text[i] == '\\n'){\n            inWord = 0;\n        }\n    }\n\n    return words;\n}\n\n\nint main(){\n\n    string text;\n\n    cout << \"Enter the string : \";\n    getline(cin, text);\n\n    cout << \"Number of words : \" << countWords(text) ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que> cd \"e:\\dddddddd\\CPP_Que\\03-Strings_39\\\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\\que9 }\nEnter the string : hello worrld hello world hello world\nNumber of words : 6"
      },
      {
        "id": 10,
        "filename": "que10.cpp",
        "title": "Program to count the total number of characters in a string",
        "question": "Que 10 : \"Program to count the total number of characters in a string\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n\n    cout << \"Enter a string : \";\n    getline(cin, text);\n\n    cout << \"Total characters : \" << text.length() ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\03-Strings_39> cd \"e:\\dddddddd\\CPP_Que\\03-Strings_39\\\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\\que10 }\nEnter a string : hello world \nTotal characters : 12"
      },
      {
        "id": 11,
        "filename": "que11.cpp",
        "title": "Program to count the total number of punctuation characters exists in a String",
        "question": "Que 11 : \"Program to count the total number of punctuation characters exists in a String\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nbool isPunctuation(char ch){\n\n    string marks = \".,;:!?'-\\\"()[]{}\";\n\n    for (int i = 0; i < marks.length() ; i++){\n        if (ch == marks[i]){\n            return true;\n        }\n    }\n\n    return false;\n}\n\n\nint main(){\n\n    string text;\n    int count = 0;\n\n    cout << \"Enter a string : \";\n    getline(cin, text);\n\n    for (int i = 0; i < (int)text.length(); i++){\n        if (isPunctuation(text[i])){\n            count++;\n        }\n    }\n\n    cout << \"Total punctuation characters : \" << count ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\03-Strings_39> cd \"e:\\dddddddd\\CPP_Que\\03-Strings_39\\\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\\que11 }\nEnter a string : hello , world;';\" \nTotal punctuation characters : 5"
      },
      {
        "id": 12,
        "filename": "que12.cpp",
        "title": "Program to count the total number of vowels and consonants in a string",
        "question": "Que 12 : \"Program to count the total number of vowels and consonants in a string\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nbool isVowel(char ch){\n\n    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'){\n        return true;\n    }\n\n    return false;\n}\n\n\nint main(){\n\n    string text;\n    int vowels = 0;\n    int consonants = 0;\n\n    cout << \"Enter a string : \";\n    getline(cin, text);\n\n    for (int i = 0; i < text.length(); i++){\n            if (isVowel(text[i])){\n                vowels++;\n            }\n\n            if (!isVowel(text[i])){\n                consonants++;\n            }\n        \n    }\n\n    cout << \"Vowels : \" << vowels << \"\\n\";\n    cout << \"Consonants : \" << consonants ;\n\n\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\03-Strings_39> cd \"e:\\dddddddd\\CPP_Que\\03-Strings_39\\\" ; if ($?) { g++ que12.cpp -o que12 } ; if ($?) { .\\que12 }\nEnter a string : hello workdl\nVowels : 3\nConsonants : 9"
      }
    ]
  },
  {
    "id": 4,
    "slug": "multi-dimension-arrays",
    "title": "Multi Dimension Arrays",
    "subtitle": "12 Problems",
    "description": "Curated C++ practice problems focused on multi dimension arrays concepts and patterns.",
    "questions": [
      {
        "id": 1,
        "filename": "que1.cpp",
        "title": "Enter the Matrix of rows and columns entered by the user and print in matrix format",
        "question": "Que 1 : \"Enter the Matrix of rows and columns entered by the user and print in matrix format\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int rows;\n    int cols;\n    int matrix[20][20];\n\n    cout << \"Enter number of rows: \";\n    cin >> rows;\n\n    cout << \"Enter number of columns: \";\n    cin >> cols;\n\n    if (rows <= 0 || cols <= 0 || rows > 20 || cols > 20){\n        cout << \"Invalid matrix size\\n\";\n        return 0;\n    }\n\n    cout << \"Enter matrix elements: \"<<endl;\n    for (int i = 0; i < rows; i++){\n        for (int j = 0; j < cols; j++){\n            cin >> matrix[i][j];\n        }\n    }\n\n    cout << \"Matrix is:\"<<endl;\n    for (int i = 0; i < rows; i++){\n        for (int j = 0; j < cols; j++){\n            cout << matrix[i][j] << \" \";\n        }\n\n        cout << \"\\n\";\n    }\n\n    return 0;\n}\n\n\n// PS F:\\dddddddd\\CPP_Que\\02-Functions_7> cd \"f:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12\\\" ; if ($?) { g++ que1.cpp -o que1 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\que1 }\n// Enter number of rows: 4\n// Enter number of columns: 4\n// Enter matrix elements: \n// 2",
        "output": "4\n6\n7\n87\n8\n4\n32\n5\n6\n6\n6\n6\n6\n6\n6\nMatrix is:\n2 4 6 7 \n87 8 4 32 \n5 6 6 6 \n6 6 6 6"
      },
      {
        "id": 2,
        "filename": "que2.cpp",
        "title": "Program to Add Two Matrices",
        "question": "Que 2 : \"Program to Add Two Matrices\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int first[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};\n    int second[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};\n    int sum[3][3]={0};\n\n\n    for (int i = 0; i < 3; i++){\n        for (int j = 0; j < 3; j++){\n            sum[i][j] = first[i][j] + second[i][j];\n        }\n    }\n\n    cout << \"Sum of matrixs  is : \\n\";\n    for (int i = 0; i < 3; i++){\n        for (int j = 0; j < 3; j++){\n            cout << sum[i][j] << \" \";\n        }\n\n        cout << \"\\n\";\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12> cd \"e:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12\\\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\\que2 }\nSum of matrixs  is : \n2 4 6\n8 10 14\n14 16 18"
      },
      {
        "id": 3,
        "filename": "que3.cpp",
        "title": "Program to Multiply Two Matrices",
        "question": "Que 3 : \"Program to Multiply Two Matrices\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    \n    int first[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};\n    int second[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};\n    int product[3][3]={0};\n\n\n    for (int i = 0; i < 3; i++){\n        for (int j = 0; j < 3; j++){\n            product[i][j] = 0;\n\n            for (int k = 0; k < 3; k++){\n                product[i][j] += first[i][k] * second[k][j];\n            }\n        }\n    }\n\n    cout << \"Product of matrixs is :\\n\";\n\n    for (int i = 0; i < 3; i++){\n        for (int j = 0; j < 3; j++){\n            cout << product[i][j] << \" \";\n        }\n\n        cout << \"\\n\";\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12> cd \"e:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12\\\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\\que3 }\nProduct of matrixs is :\n30 36 44\n73 89 110\n102 126 158"
      },
      {
        "id": 4,
        "filename": "que4.cpp",
        "title": "Program to subtract the two matrices",
        "question": "Que 4 : \"Program to subtract the two matrices\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int first[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};\n    int second[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};\n    int diff[3][3]={0};\n\n\n    for (int i = 0; i < 3; i++){\n        for (int j = 0; j < 3; j++){\n            diff[i][j] = first[i][j] - second[i][j];\n        }\n    }\n\n    cout << \"Difference of matrixs  is : \\n\";\n    for (int i = 0; i < 3; i++){\n        for (int j = 0; j < 3; j++){\n            cout << diff[i][j] << \" \";\n        }\n\n        cout << \"\\n\";\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12> cd \"e:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12\\\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\\que4 }\nDifference of matrixs  is : \n0 0 0\n0 0 0\n0 0 0"
      },
      {
        "id": 5,
        "filename": "que5.cpp",
        "title": "Program to determine whether two matrices are equal",
        "question": "Que 5 : \"Program to determine whether two matrices are equal\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int first[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};\n    int second[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};\n    int n = 0;\n\n\n    for (int i = 0; i < 3; i++){\n        for (int j = 0; j < 3; j++){\n            if (first[i][j] == second[i][j]){\n                n++;\n            }\n\n        }\n    }\n\n    if (n == 9){\n    cout << \"Equal \";\n    \n}\n\nelse {\n        cout << \"Not Equal \";\n        \n\n    }\n    \n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12> cd \"e:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12\\\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\\que5 }\nEqual"
      },
      {
        "id": 6,
        "filename": "que6.cpp",
        "title": "Program to display the lower triangular matrix",
        "question": "Que 6 : \"Program to display the lower triangular matrix\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int matrix[3][3] = {{1,2,3} , {4,5,7} , {7,8,9}};\n\n\n    // 00 01 02\n    // 10 11 12\n    // 20 21 22\n\n    cout << \"Lower triangular matrix : \\n\";\n\n    for (int i = 0; i < 3; i++){\n        for (int j = 0; j < 3; j++){\n            if (j <= i){\n                cout << matrix[i][j] << \" \";\n            }\n\n            if (j > i){\n                cout << \" \";\n            }\n        }\n\n        cout << \"\\n\";\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12> cd \"e:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12\\\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?) { .\\que6 }\nLower triangular matrix : \n1\n4 5\n7 8 9"
      },
      {
        "id": 7,
        "filename": "que7.cpp",
        "title": "Program to display the upper triangular matrix",
        "question": "Que 7 : \"Program to display the upper triangular matrix\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int matrix[3][3] = {{1,2,3} , {4,5,7} , {7,8,9}};\n\n\n    // 00 01 02\n    // 10 11 12\n    // 20 21 22\n\n    cout << \"Upper triangular matrix : \\n\";\n\n    for (int i = 0; i < 3; i++){\n        for (int j = 0; j < 3; j++){\n            if (j >= i){\n                cout << matrix[i][j] << \" \";\n            }\n\n            if (j < i){\n                cout << \" \";\n            }\n        }\n\n        cout << \"\\n\";\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12> cd \"e:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12\\\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\\que7 }\nUpper triangular matrix : \n1 2 3\n 5 7\n  9"
      },
      {
        "id": 8,
        "filename": "que8.cpp",
        "title": "Program to find the frequency of odd & even numbers in the given matrix",
        "question": "Que 8 : \"Program to find the frequency of odd & even numbers in the given matrix\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int matrix[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};\n\n    int odd = 0,even = 0 ;\n\n\n\n    for (int i = 0; i < 3; i++){\n        for (int j = 0; j < 3; j++){\n            if(matrix[i][j]%2 == 0){\n                even++;\n            } \n            else \n            odd++;\n        }\n    }\n\n    cout << \"No of Odd is : \"<<odd <<endl;\n    cout << \"No of Even is : \"<<even<<endl;\n\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12> cd \"e:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12\\\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\\que8 }\nNo of Odd is : 6\nNo of Even is : 3"
      },
      {
        "id": 9,
        "filename": "que9.cpp",
        "title": "Program to find the sum of each row and each column of a matrix",
        "question": "Que 9 : \"Program to find the sum of each row and each column of a matrix\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n        int matrix[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};\n\n\n    cout << \"Sum of each row:\\n\";\n    for (int i = 0; i < 3 ; i++){\n        int rowSum = 0;\n\n        for (int j = 0; j < 3 ; j++){\n            rowSum += matrix[i][j];\n        }\n\n        cout << \"Row \" << i + 1 << \" sum :  \" << rowSum << \"\\n\";\n    }\n\n    cout << \"Sum of each column:\\n\";\n    for (int j = 0; j < 3 ; j++){\n        int colSum = 0;\n\n        for (int i = 0; i < 3 ; i++){\n            colSum += matrix[i][j];\n        }\n\n        cout << \"Column \" << j + 1 << \" sum : \" << colSum << \"\\n\";\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12> cd \"e:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12\\\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\\que9 }\nSum of each row:\nRow 1 sum :  6\nRow 2 sum :  16\nRow 3 sum :  24\nSum of each column:\nColumn 1 sum : 12\nColumn 2 sum : 15\nColumn 3 sum : 19"
      },
      {
        "id": 10,
        "filename": "que10.cpp",
        "title": "Program to determine whether a given matrix is an identity matrix",
        "question": "",
        "code": "",
        "output": ""
      },
      {
        "id": 11,
        "filename": "que11.cpp",
        "title": "Program to Transpose matrix",
        "question": "Que 11 : \"Program to Transpose matrix\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int matrix[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};\n    int transpose[3][3];\n\n\n    for (int i = 0; i < 3; i++){\n        for (int j = 0; j < 3; j++){\n            transpose[j][i] = matrix[i][j];\n        }\n    }\n\n    cout << \"Transpose matrix is : \\n\";\n    for (int i = 0; i < 3; i++){\n        for (int j = 0; j < 3; j++){\n            cout << transpose[i][j] << \" \";\n        }\n\n        cout << \"\\n\";\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12> cd \"e:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12\\\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\\que11 }\nTranspose matrix is : \n1 4 7 \n2 5 8 \n3 7 9"
      },
      {
        "id": 12,
        "filename": "que12.cpp",
        "title": "Program to determine whether a given matrix is a sparse matrix",
        "question": "Que 12 : \"Program to determine whether a given matrix is a sparse matrix\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int rows = 3;\n    int cols = 3 ;\n    int matrix[3][3]= {{0,2,0} , {0,0,0} , {7,0,0}};\n    int zeroCount = 0;\n\n    for (int i = 0; i < rows; i++){\n        for (int j = 0; j < cols; j++){\n\n            if (matrix[i][j] == 0){\n                zeroCount++;\n            }\n        }\n    }\n\n    int totalElements = rows * cols;\n\n    if (zeroCount > totalElements / 2){\n        cout << \"sparse matrix\";\n    }\n\n    if (zeroCount <= totalElements / 2){\n        cout << \"not a sparse matrix\";\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12> cd \"e:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12\\\" ; if ($?) { g++ que12.cpp -o que12 } ; if ($?) { .\\que12 }\nsparse matrix"
      }
    ]
  },
  {
    "id": 5,
    "slug": "basic-programming-constructs",
    "title": "Basic Programming Constructs",
    "subtitle": "102 Problems",
    "description": "Curated C++ practice problems focused on basic programming constructs concepts and patterns.",
    "questions": [
      {
        "id": 1,
        "filename": "que1.cpp",
        "title": "Write a C++ program to print ‘Hello World!’ on screen",
        "question": "Que 1 : \"Write a C++ program to print ‘Hello World!’ on screen\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    cout << \"Hello World\";\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\03-Strings_39> cd \"e:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\\que1 }\nHello World"
      },
      {
        "id": 2,
        "filename": "que2.cpp",
        "title": "Write a C++ program to print the sum of two numbers",
        "question": "Que 2 : \"Write a C++ program to print the sum of two numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int a;\n    int b;\n\n    cout << \"Enter two numbers: \";\n    cin >> a >> b;\n\n    cout << \"Sum is : \" << a + b ;\n    return 0;\n}",
        "output": "S E:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"e:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?)\n { .\\que2 }\nEnter two numbers: 4\n5\nSum is : 9"
      },
      {
        "id": 3,
        "filename": "que3.cpp",
        "title": "Write a C++ program that takes two numbers and display the product of two numbers",
        "question": "Que 3 : \"Write a C++ program that takes two numbers and display the product of two numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int a;\n    int b;\n\n    cout << \"Enter two numbers: \";\n    cin >> a >> b;\n\n    cout << \"Product is: \" << a * b ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"e:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?)\n { .\\que3 }\nEnter two numbers: 5\n6\nProduct is: 30"
      },
      {
        "id": 4,
        "filename": "que4.cpp",
        "title": "Write a C++ program to print the sum, multiply, subtract, divide and remainder of two numbers",
        "question": "Que 4 : \"Write a C++ program to print the sum, multiply, subtract, divide and remainder of two numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int a;\n    int b;\n\n    cout << \"Enter two numbers: \";\n    cin >> a >> b;\n\n    cout << \"Sum: \" << a + b << \"\\n\";\n    cout << \"Multiply : \" << a * b << \"\\n\";\n    cout << \"Subtract: \" << a - b << \"\\n\";\n    cout << \"Divide : \" << a / b << \"\\n\";\n    cout << \"Remainder : \" << a % b << \"\\n\";\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"e:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?)\n { .\\que4 }\nEnter two numbers: 4\n2\nSum: 6\nMultiply : 8\nSubtract: 2\nDivide : 2\nRemainder : 0"
      },
      {
        "id": 5,
        "filename": "que5.cpp",
        "title": "Write a C++ program that takes five numbers as input to calculate and print the average of the numbers",
        "question": "Que 5 : \"Write a C++ program that takes five numbers as input to calculate and print the average of the numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int a;\n    int b;\n    int c;\n    int d;\n    int e;\n\n    cout << \"Enter five numbers : \";\n\n    cin >> a >> b >> c >> d >> e;\n\n    int average = (a + b + c + d + e) / 5;\n\n    cout << \"Average is : \" << average ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"e:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?)\n { .\\que5 }\nEnter five numbers : 5\n5\n5\n5\n5\nAverage is : 5"
      },
      {
        "id": 6,
        "filename": "que6.cpp",
        "title": "Write a C++ program to swap two variables",
        "question": "Que 6 : \"Write a C++ program to swap two variables\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int first;\n    int second;\n\n    cout << \"Enter two numbers: \";\n    cin >> first >> second;\n\n    int temp = first;\n    first = second;\n    second = temp;\n\n    cout << \"After swap \\n first = \" << first << \" second = \" << second ;\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"e:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?)\n { .\\que6 }\nEnter two numbers: 4\n5\nAfter swap \n first = 5 second = 4"
      },
      {
        "id": 7,
        "filename": "que7.cpp",
        "title": "Write a C++ program to convert a decimal number to binary numbers",
        "question": "Que 7 : \"Write a C++ program to convert a decimal number to binary numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int decimal;\n    int binary[64];\n    int index = 0;\n\n    cout << \"Enter decimal number: \";\n    cin >> decimal;\n\n    while (decimal > 0){\n        cout<< decimal % 2;\n        decimal = decimal / 2;\n        index++;\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"e:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?)\n { .\\que7 }\nEnter decimal number: 67\n1100001"
      },
      {
        "id": 8,
        "filename": "que8.cpp",
        "title": "Write a C++ program to convert a binary number to decimal number",
        "question": "Que 8 : \"Write a C++ program to convert a binary number to decimal number\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int binary;\n    int decimal = 0;\n    int place = 1;\n\n    cout << \"Enter binary number: \";\n    cin >> binary;\n\n    while (binary > 0){\n        int digit = binary % 10;\n        decimal += digit * place;\n        place = place * 2;\n        binary = binary / 10;\n    }\n\n    cout << \"Decimal number : \" << decimal ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"e:\\dddddddd\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?)\n { .\\que8 }\nEnter binary number: 1111111\nDecimal number : 127"
      },
      {
        "id": 9,
        "filename": "que9.cpp",
        "title": "Write a C++ program to check whether C++ is installed on your computer or not",
        "question": "Que 9 : \"Write a C++ program to check whether C++ is installed on your computer or not\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n\n    return 0;\n}",
        "output": ""
      },
      {
        "id": 10,
        "filename": "que10.cpp",
        "title": "Write a C++ program and compute the sum of the digits of an integer",
        "question": "Que 10 : \"Write a C++ program and compute the sum of the digits of an integer\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int number;\n    int sum = 0;\n\n    cout << \"Enter an integer: \";\n    cin >> number;\n    while (number > 0){\n        sum += number % 10;\n        number = number / 10;\n    }\n\n    cout << \"Sum of digits: \" << sum ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\\que10 }\nEnter an integer: 4444\nSum of digits: 16"
      },
      {
        "id": 11,
        "filename": "que11.cpp",
        "title": "Write a C++ program to compare two numbers",
        "question": "Que 11 : \"Write a C++ program to compare two numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int first;\n    int second;\n\n    cout << \"Enter two numbers: \";\n    cin >> first >> second;\n\n    if (first > second){\n        cout << first << \" is greater than \" << second ;\n    }\n\n    if (first < second){\n        cout << second << \" is greater than \" << first ;\n    }\n\n    if (first == second){\n        cout << \"Both numbers are equal\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\\que11 }\nEnter two numbers: 5\n6\n6 is greater than 5"
      },
      {
        "id": 12,
        "filename": "que12.cpp",
        "title": "Write a C++ program to count the letters, spaces, numbers and other characters of an input string",
        "question": "Que 12 : \"Write a C++ program to count the letters, spaces, numbers and other characters of an input string\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n    int letters = 0;\n    int spaces = 0;\n    int numbers = 0;\n    int others = 0;\n\n    cout << \"Enter a string: \";\n    getline(cin, text);\n\n    for (int i = 0; i < text.length(); i++){\n        char ch = text[i];\n\n        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')){\n            letters++;\n        }\n\n        else if (ch == ' '){\n            spaces++;\n        }\n\n        else if (ch >= '0' && ch <= '9'){\n            numbers++;\n        }\n\n        else{\n            others++;\n        }\n    }\n\n    cout << \"Letters: \" << letters << \"\\n\";\n    cout << \"Spaces: \" << spaces << \"\\n\";\n    cout << \"Numbers: \" << numbers << \"\\n\";\n    cout << \"Other characters: \" << others ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que12.cpp -o que12 } ; if ($?) { .\\que12 }\nEnter a string: hrllo434   jhvhfj j56;;'\nLetters: 12\nSpaces: 4\nNumbers: 5\nOther characters: 3"
      },
      {
        "id": 13,
        "filename": "que13.cpp",
        "title": "Write a C++ program to print the ascii value of a given character",
        "question": "Que 13 : \"Write a C++ program to print the ascii value of a given character\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    char ch;\n\n    cout << \"Enter a character: \";\n    cin >> ch;\n\n    cout << \"ASCII value is \" << (int)ch ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que13.cpp -o que13 } ; if ($?) { .\\que13 }\nEnter a character: A\nASCII value is 65"
      },
      {
        "id": 14,
        "filename": "que14.cpp",
        "title": "Write a C++ program that accepts an integer (n) and computes the value of n+nn+nnn",
        "question": "Que 14 : \"Write a C++ program that accepts an integer (n) and computes the value of n+nn+nnn\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n\n    cout << \"Enter a number n: \";\n    cin >> n;\n\n    int nn = n * 10 + n;\n    int nnn = n * 100 + nn;\n    int result = n + nn + nnn;\n\n    cout << \"Value of n + nn + nnn is: \" << result ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que14.cpp -o que14 } ; if ($?) { .\\que14 }\nEnter a number n: 5\nValue of n + nn + nnn is: 615"
      },
      {
        "id": 15,
        "filename": "que15.cpp",
        "title": "Write a C++ program to display the system time",
        "question": "Que 15 : \"Write a C++ program to display the system time\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    cout << \"Current date: \" << __DATE__ << \"\\n\";\n    cout << \"Current time: \" << __TIME__ << \"\\n\";\n    return 0;\n}",
        "output": ""
      },
      {
        "id": 16,
        "filename": "que16.cpp",
        "title": "Write a C++ program to print the odd numbers from 1 to 20",
        "question": "Que 16 : \"Write a C++ program to print the odd numbers from 1 to 20\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    cout << \"Odd numbers are : \\n\";\n    for (int i = 1; i <= 20; i++){\n        if (i % 2 != 0){\n            cout << i << \" \";\n        }\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que16.cpp -o que16 } ; if ($?) { .\\que16 }\nOdd numbers are : \n1 3 5 7 9 11 13 15 17 19"
      },
      {
        "id": 17,
        "filename": "que17.cpp",
        "title": "Write a C++ program to print the even numbers from 1 to 20",
        "question": "Que 17 : \"Write a C++ program to print the even numbers from 1 to 20\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    cout << \"Even numbers are : \\n\";\n    for (int i = 1; i <= 20; i++){\n        if (i % 2 == 0){\n            cout << i << \" \";\n        }\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que17.cpp -o que17 } ; if ($?) { .\\que17 }\nEven numbers are : \n2 4 6 8 10 12 14 16 18 20"
      },
      {
        "id": 18,
        "filename": "que18.cpp",
        "title": "Write a C++ program to convert a string to an integer",
        "question": "Que 18 : \"Write a C++ program to convert a string to an integer\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n    int sign = 1;\n    int index = 0;\n    int number = 0;\n\n    cout << \"Enter numeric string: \";\n    cin >> text;\n\n    if (text.length() == 0){\n        cout << \"Invalid input \";\n        return 0;\n    }\n\n    if (text[0] == '-'){\n        sign = -1;\n        index = 1;\n        if (index == (int)text.length()){\n        cout << \"Invalid input \";\n        return 0;\n    }\n    }\n\n    for (int i = index; i < (int)text.length(); i++){\n        if (text[i] < '0' || text[i] > '9'){\n            cout << \"Invalid input\\n\";\n            return 0;\n        }\n\n        number = number * 10 + (text[i] - '0');\n    }\n\n    number = number * sign;\n\n    cout << \"Converted int value : \" << number ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\\que1 }\nEnter numeric string: 12243\nConverted int value : 12243\nPS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\\que1 }\nEnter numeric string: df445\nInvalid input"
      },
      {
        "id": 19,
        "filename": "que19.cpp",
        "title": "Write a C++ program to convert seconds to hour, minute and seconds",
        "question": "Que 19 : \"Write a C++ program to convert seconds to hour, minute and seconds\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int totalSeconds;\n\n    cout << \"Enter seconds : \";\n    cin >> totalSeconds;\n\n    int hours = totalSeconds / 3600;\n    int minutes = (totalSeconds % 3600) / 60;\n    int seconds = totalSeconds % 60;\n\n    cout << \"Hours: \" << hours << \"\\n\";\n    cout << \"Minutes: \" << minutes << \"\\n\";\n    cout << \"Seconds: \" << seconds ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que19.cpp -o que19 } ; if ($?) { .\\que19 }\nEnter seconds : 5600\nHours: 1\nMinutes: 33\nSeconds: 20"
      },
      {
        "id": 20,
        "filename": "que20.cpp",
        "title": "Write a C++ program to compute the sum of the first 100 prime numbers",
        "question": "Que 20 : \"Write a C++ program to compute the sum of the first 100 prime numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int count = 0;\n    int number = 2;\n    int sum = 0;\n\n    while (count < 100){\n        int prime = 1;\n\n        for (int i = 2; i * i <= number; i++){\n            if (number % i == 0){\n                prime = 0;\n                break;\n            }\n        }\n\n        if (prime == 1){\n            sum += number;\n            count++;\n        }\n\n        number++;\n    }\n\n    cout << \"Sum : \" << sum ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que20.cpp -o que20 } ; if ($?) { .\\que20 }\nSum : 24133"
      },
      {
        "id": 21,
        "filename": "que21.cpp",
        "title": "Write a C++ program to compute the square root of an given integer",
        "question": "Que 21 : \"Write a C++ program to compute the square root of an given integer\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int number;\n\n    cout << \"Enter an integer: \";\n    cin >> number;\n\n    if (number < 0){\n        cout << \"Enter a +ve no \";\n        return 0;\n    }\n\n    int root = 0;\n    while ((root + 1) * (root + 1) <= number){\n        root++;\n    }\n\n    cout << \"Square root is : \" << root ;\n    return 0;\n}",
        "output": "S D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que21.cpp -o que21 } ; if ($?) { .\\que21 }\nEnter an integer: 216\nSquare root is : 14"
      },
      {
        "id": 22,
        "filename": "que22.cpp",
        "title": "Write a C++ program to check if a positive number is a palindrome or not",
        "question": "Que 22 : \"Write a C++ program to check if a positive number is a palindrome or not\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int number;\n\n    cout << \"Enter a positive number: \";\n    cin >> number;\n\n    int original = number;\n    int reverse = 0;\n\n    while (number > 0){\n        reverse = reverse * 10 + (number % 10);\n        number = number / 10;\n    }\n\n    if (original == reverse){\n        cout << \"Palindrome \";\n    }\n\n    if (original != reverse){\n        cout << \"Not palindrome \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que22.cpp -o que22 } ; if ($?) { .\\que22 }\nEnter a positive number: 1221\nPalindrome"
      },
      {
        "id": 23,
        "filename": "que24.cpp",
        "title": "Write a C++ program to add all the digits of a given positive integer",
        "question": "Que 24 : \"Write a C++ program to add all the digits of a given positive integer\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int number;\n    int sum = 0;\n\n    cout << \"Enter a positive integer : \";\n    cin >> number;\n\n    if (number < 0){\n        cout << \"Enter positive integer \";\n        return 0;\n    }\n\n    while (number > 0){\n        sum += number % 10;\n        number = number / 10;\n    }\n\n    cout << \"Sum of digits: \" << sum ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que24.cpp -o que24 } ; if ($?) { .\\que24 }\nEnter a positive integer : 12345\nSum of digits: 15"
      },
      {
        "id": 24,
        "filename": "que25.cpp",
        "title": "C++ program to find area of circle",
        "question": "Que 25 : \"C++ program to find area of circle\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int radius;\n\n    cout << \"Enter radius : \";\n    cin >> radius;\n    cout << \"Area of circle is: \" << (22 * radius * radius) / 7;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que25.cpp -o que25 } ; if ($?) { .\\que25 }\nEnter radius : 7\nArea of circle is: 154"
      },
      {
        "id": 25,
        "filename": "que26.cpp",
        "title": "C++ Program to find area of rectangle",
        "question": "Que 26 : \"C++ Program to find area of rectangle\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int length;\n    int breadth;\n\n    cout << \"Enter length and breadth: \";\n    cin >> length >> breadth;\n    cout << \"Area of rectangle is: \" << length * breadth;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que26.cpp -o que26 } ; if ($?) { .\\que26 }\nEnter length and breadth: 4\n5\nArea of rectangle is: 20"
      },
      {
        "id": 26,
        "filename": "que27.cpp",
        "title": "C++ Program to find area of triangle",
        "question": "Que 27 : \"C++ Program to find area of triangle\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int base;\n    int height;\n\n    cout << \"Enter base and height: \";\n    cin >> base >> height;\n    cout << \"Area of triangle is : \" << (base * height) / 2;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que27.cpp -o que27 } ; if ($?) { .\\que27 }\nEnter base and height: 7\n7\nArea of triangle is : 24"
      },
      {
        "id": 27,
        "filename": "que28.cpp",
        "title": "C++ Program to find area of equilateral triangle",
        "question": "Que 28 : \"C++ Program to find area of equilateral triangle\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int side;\n\n    cout << \"Enter side: \";\n    cin >> side;\n    cout << \"Area : \" << (433 * side * side) / 1000;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que28.cpp -o que28 } ; if ($?) { .\\que28 }\nEnter side: 6\nArea : 15"
      },
      {
        "id": 28,
        "filename": "que29.cpp",
        "title": "C++ Program to find area of rhombus",
        "question": "Que 29 : \"C++ Program to find area of rhombus\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int diagonal1;\n    int diagonal2;\n\n    cout << \"Enter diagonals : \";\n    cin >> diagonal1 >> diagonal2;\n    cout << \"Area : \" <<(diagonal1 * diagonal2) / 2;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que29.cpp -o que29 } ; if ($?) { .\\que29 }\nEnter diagonals : 8\n8\nArea : 32"
      },
      {
        "id": 29,
        "filename": "que30.cpp",
        "title": "C++ Program to find area of parallelogram",
        "question": "Que 30 : \"C++ Program to find area of parallelogram\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int base;\n    int height;\n\n    cout << \"Enter base and height: \";\n    cin >> base >> height;\n    cout << \"Area : \" << base * height;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que30.cpp -o que30 } ; if ($?) { .\\que30 }\nEnter base and height: \n6\n6\nArea : 36"
      },
      {
        "id": 30,
        "filename": "que31.cpp",
        "title": "C++ Program to find area of Prism",
        "question": "Que 31 : \"C++ Program to find area of Prism\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int baseArea;\n    int height;\n\n    cout << \"Enter base area and height of prism : \";\n    cin >> baseArea >> height;\n    cout << \"volume : \" <<  baseArea * height;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que31.cpp -o que31 } ; if ($?) { .\\que31 }\nEnter base area and height of prism : 7\n8\nvolume : 56"
      },
      {
        "id": 31,
        "filename": "que32.cpp",
        "title": "C++ Program to find volume of sphere",
        "question": "Que 32 : \"C++ Program to find volume of sphere\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int radius;\n\n    cout << \"Enter radius: \";\n    cin >> radius;\n\n    cout << \"Volume : \" << (4 * 22 * radius * radius * radius) / (3 * 7);\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que32.cpp -o que32 } ; if ($?) { .\\que32 }\nEnter radius: 7\nVolume : 1437"
      },
      {
        "id": 32,
        "filename": "que33.cpp",
        "title": "C++ Program to find volume of cylinder",
        "question": "Que 33 : \"C++ Program to find volume of cylinder\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int radius;\n    int height;\n\n    cout << \"Enter radius and height: \";\n    cin >> radius >> height;\n    cout << \"Volume : \" << (22 * radius * radius * height) / 7;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que33.cpp -o que33 } ; if ($?) { .\\que33 }\nEnter radius and height: 6\n7\nVolume : 792"
      },
      {
        "id": 33,
        "filename": "que34.cpp",
        "title": "C++ Program to find volume of cuboid",
        "question": "Que 34 : \"C++ Program to find volume of cuboid\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int length;\n    int breadth;\n    int height;\n\n    cout << \"Enter length, breadth and height: \";\n    cin >> length >> breadth >> height;\n    cout << \"Volume of cuboid is: \" << length * breadth * height;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que34.cpp -o que34 } ; if ($?) { .\\que34 }\nEnter length, breadth and height: 5\n6\n6\nVolume of cuboid is: 180"
      },
      {
        "id": 34,
        "filename": "que35.cpp",
        "title": "C++ Program to find volume of cone",
        "question": "Que 35 : \"C++ Program to find volume of cone\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int radius;\n    int height;\n\n    cout << \"Enter radius and height: \";\n    cin >> radius >> height;\n    cout << \"Volume : \" << (22 * radius * radius * height) / (3 * 7);\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que35.cpp -o que35 } ; if ($?) { .\\que35 }\nEnter radius and height: 5\n6\nVolume of cone is: 157"
      },
      {
        "id": 35,
        "filename": "que36.cpp",
        "title": "C++ program to find surface area of cuboid",
        "question": "Que 36 : \"C++ program to find surface area of cuboid\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int length;\n    int breadth;\n    int height;\n\n    cout << \"Enter length, breadth and height: \";\n    cin >> length >> breadth >> height;\n    cout << \"Surface area : \" <<  2* (length * breadth + breadth * height + length * height);\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que36.cpp -o que36 } ; if ($?) { .\\que36 }\nEnter length, breadth and height: 7\n7\n7\nSurface area : 294"
      },
      {
        "id": 36,
        "filename": "que37.cpp",
        "title": "C++ program to find surface area of cylinder",
        "question": "Que 37 : \"C++ program to find surface area of cylinder\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int radius;\n    int height;\n\n    cout << \"Enter radius and height: \";\n    cin >> radius >> height;\n    cout << \"Surface area : \" << (2 * 22 * radius * (radius + height)) / 7;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que37.cpp -o que37 } ; if ($?) { .\\que37 }\nEnter radius and height: 6\n7\nSurface area : 490"
      },
      {
        "id": 37,
        "filename": "que38.cpp",
        "title": "C++ program to find surface area of cube",
        "question": "Que 38 : \"C++ program to find surface area of cube\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int side;\n\n    cout << \"Enter side: \";\n    cin >> side;\n\n    cout << \"Surface area : \" << 6 * side * side;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que38.cpp -o que38 } ; if ($?) { .\\que38 }\nEnter side: 7\nSurface area : 294"
      },
      {
        "id": 38,
        "filename": "que39.cpp",
        "title": "C++ program to calculate average marks",
        "question": "Que 39 : \"C++ program to calculate average marks\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int subjects;\n    int marks;\n    int total = 0;\n\n    cout << \"Enter number of subjects: \";\n    cin >> subjects;\n    for (int i = 1; i <= subjects; i++){\n        cout << \"Enter marks for subject no. \" << i << \" : \";\n        cin >> marks;\n        total += marks;\n    }\n\n    cout << \"Average marks : \" << total / subjects;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que39.cpp -o que39 } ; if ($?) { .\\que39 }\nEnter number of subjects: 5\nEnter marks for subject no. 1 : 2\nEnter marks for subject no. 2 : 2\nEnter marks for subject no. 3 : 2\nEnter marks for subject no. 4 : 2\nEnter marks for subject no. 5 : 2\nAverage marks : 2"
      },
      {
        "id": 39,
        "filename": "que40.cpp",
        "title": "C++ program to check vowel or consonant",
        "question": "Que 40 : \"C++ program to check vowel or consonant\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    char ch;\n\n    cout << \"Enter a character: \";\n    cin >> ch;\n\n    if (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))){\n        cout << \"Not alphabet \";\n        return 0;\n    }\n\n    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'){\n        cout << \"Vowel \";\n    }\n\n    if (!(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')){\n        cout << \"Consonant\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que40.cpp -o que40 } ; if ($?) { .\\que40 }\nEnter a character: E\nVowel"
      },
      {
        "id": 40,
        "filename": "que41.cpp",
        "title": "C++ program to sum of N numbers",
        "question": "Que 41 : \"C++ program to sum of N numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int number;\n    int sum = 0;\n\n    cout << \"Enter count of numbers : \";\n    cin >> n;\n\n    for (int i = 1; i <= n; i++){\n        cout << \"Enter number \" << i << \": \";\n        cin >> number;\n        sum += number;\n    }\n\n    cout << \"Sum is :  \" << sum ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que41.cpp -o que41 } ; if ($?) { .\\que41 }\nEnter count of numbers : 6\nEnter number 1: 34\nEnter number 2: 43\nEnter number 3: 5\nEnter number 4: 46\nEnter number 5: 88\nEnter number 6: 99\nSum is :  315"
      },
      {
        "id": 41,
        "filename": "que42.cpp",
        "title": "C++ program to find factorial of any number",
        "question": "Que 42 : \"C++ program to find factorial of any number\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int factorial = 1;\n\n    cout << \"Enter a number: \";\n    cin >> n;\n\n    for (int i = 1; i <= n; i++){\n        factorial *= i;\n    }\n\n    cout << \"Factorial is : \" << factorial ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que42.cpp -o que42 } ; if ($?) { .\\que42 }\nEnter a number: 7\nFactorial is : 5040"
      },
      {
        "id": 42,
        "filename": "que43.cpp",
        "title": "C++ Program to calculate electricity bill",
        "question": "Que 43 : \"C++ Program to calculate electricity bill\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int units;\n\n    cout << \"Enter electricity units: \";\n    cin >> units;\n\n    cout << \"Electricity bill is : \" << units * 5 ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que43.cpp -o que43 } ; if ($?) { .\\que43 }\nEnter electricity units: 100\nElectricity bill is : 500"
      },
      {
        "id": 43,
        "filename": "que45.cpp",
        "title": "C++ Program to calculate compound interest",
        "question": "Que 45 : \"C++ Program to calculate compound interest\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int principal;\n    int rate;\n    int time;\n    int amount;\n\n    cout << \"Enter principal amount: \";\n    cin >> principal;\n\n    cout << \"Enter rate : \";\n    cin >> rate;\n\n    cout << \"Enter time : \";\n    cin >> time;\n\n    amount = principal;\n    for (int i = 0; i < time; i++){\n        amount = amount + (amount * rate) / 100;\n    }\n\n    int ci = amount - principal;\n    cout << \"Compound interest is : \" << ci << \"\\n\";\n    cout << \"Total amount is : \" << amount ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que45.cpp -o que45 } ; if ($?) { .\\que45 }\nEnter principal amount: 6000\nEnter rate : 5\nEnter time : 5\nCompound interest is : 1656\nTotal amount is : 7656"
      },
      {
        "id": 44,
        "filename": "que46.cpp",
        "title": "C++ Program To Calculate Batting Average",
        "question": "Que 46 : \"C++ Program To Calculate Batting Average\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int runs;\n    int innings;\n    int notOut;\n\n    cout << \"Enter total runs: \";\n    cin >> runs;\n\n    cout << \"Enter total innings: \";\n    cin >> innings;\n\n    cout << \"Enter not out innings: \";\n    cin >> notOut;\n\n    int outs = innings - notOut;\n    cout << \"Batting average is : \" << runs / outs;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que46.cpp -o que46 } ; if ($?) { .\\que46 }\nEnter total runs: 566\nEnter total innings: 6\nEnter not out innings: 2\nBatting average is : 141"
      },
      {
        "id": 45,
        "filename": "que47.cpp",
        "title": "C++ Program to Calculate Commission Percentage",
        "question": "Que 47 : \"C++ Program to Calculate Commission Percentage\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int sales;\n    int commission;\n\n    cout << \"Enter total sales amount: \";\n    cin >> sales;\n\n    cout << \"Commission : \" << (sales * 5) / 100;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que47.cpp -o que47 } ; if ($?) { .\\que47 }\nEnter total sales amount: 600000\nCommission : 30000"
      },
      {
        "id": 46,
        "filename": "que48.cpp",
        "title": "C++ Program To Find Distance Between Two Points",
        "question": "Que 48 : \"C++ Program To Find Distance Between Two Points\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int x1;\n    int y1;\n    int x2;\n    int y2;\n\n    cout << \"Enter x1 y1 x2 y2: \";\n    cin >> x1 >> y1 >> x2 >> y2;\n\n    int dx = x2 - x1;\n    int dy = y2 - y1;\n    int distanceSquare = dx * dx + dy * dy;\n\n    int distance = 0;\n    while ((distance + 1) * (distance + 1) <= distanceSquare){\n        distance++;\n    }\n\n    cout << \"Distance is: \" << distance ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que48.cpp -o que48 } ; if ($?) { .\\que48 }\nEnter x1 y1 x2 y2: 5\n7\n8\n9\nDistance is: 3"
      },
      {
        "id": 47,
        "filename": "que49.cpp",
        "title": "C++ Program To Calculate Power Of Number",
        "question": "Que 49 : \"C++ Program To Calculate Power Of Number\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int base;\n    int exponent;\n    int result = 1;\n\n    cout << \"Enter base and exponent : \";\n    cin >> base >> exponent;\n\n    for (int i = 1; i <= exponent; i++){\n        result *= base;\n    }\n    cout << \"Power is : \" << result ;\n    return 0;\n}\n\n\n// PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que49.cpp -o que49 } ; if ($?) { .\\que49 }\n// Enter base and exponent : 7",
        "output": "3\nPower is : 343"
      },
      {
        "id": 48,
        "filename": "que50.cpp",
        "title": "Write a C++ program to take three numbers from the user and print the greatest number",
        "question": "Que 50 : \"Write a C++ program to take three numbers from the user and print the greatest number\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int a;\n    int b;\n    int c;\n\n    cout << \"Enter three numbers: \";\n    cin >> a >> b >> c;\n\n    int greatest = a;\n\n    if (b > greatest){\n        greatest = b;\n    }\n\n    if (c > greatest){\n        greatest = c;\n    }\n\n    cout << \"Greatest number is : \" << greatest ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que50.cpp -o que50 } ; if ($?) { .\\que50 }\nEnter three numbers: 6\n78\n9\nGreatest number is : 78"
      },
      {
        "id": 49,
        "filename": "que51.cpp",
        "title": "Write a C++ program to find the number of days in a month",
        "question": "Que 51 : \"Write a C++ program to find the number of days in a month\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int month;\n    int year;\n\n    cout << \"Enter month : \";\n    cin >> month;\n\n    cout << \"Enter year : \";\n    cin >> year;\n\n    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){\n        cout << \"Number of days: 31\";\n    }\n\n    else if (month == 4 || month == 6 || month == 9 || month == 11){\n        cout << \"Number of days: 30\";\n    }\n\n    else{\n        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){\n            cout << \"Number of days: 29\";\n        }\n\n        else{\n            cout << \"Number of days: 28\";\n        }\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que51.cpp -o que51 } ; if ($?) { .\\que51 }\nEnter month : 2\nEnter year : 2008\nNumber of days: 29"
      },
      {
        "id": 50,
        "filename": "que52.cpp",
        "title": "Write a C++ program to test a number is positive or negative",
        "question": "Que 52 : \"Write a C++ program to test a number is positive or negative\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int number;\n\n    cout << \"Enter a number: \";\n    cin >> number;\n\n    if (number > 0){\n        cout << \"Positive number\";\n    }\n\n    else if (number < 0){\n        cout << \"Negative number\";\n    }\n\n    else{\n        cout << \"Zero\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que52.cpp -o que52 } ; if ($?) { .\\que52 }\nEnter a number: -23\nNegative number"
      },
      {
        "id": 51,
        "filename": "que53.cpp",
        "title": "Write a C++ Program to accept number of week’s day (1-7) and print name of the day",
        "question": "Que 53 : \"Write a C++ Program to accept number of week’s day (1-7) and print name of the day\"",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n\n    int day;\n\n    cout << \"Enter day number : \";\n    cin >> day;\n\n    switch(day) {\n        case 1:\n            cout << \"Monday\";\n            break;\n\n        case 2:\n            cout << \"Tuesday\";\n            break;\n\n        case 3:\n            cout << \"Wednesday\";\n            break;\n\n        case 4:\n            cout << \"Thursday\";\n            break;\n\n        case 5:\n            cout << \"Friday\";\n            break;\n\n        case 6:\n            cout << \"Saturday\";\n            break;\n\n        case 7:\n            cout << \"Sunday\";\n            break;\n\n        default:\n            cout << \"Invalid day number\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que53.cpp -o que53 } ; if ($?) { .\\que53 }\nEnter day number : 5\nFriday"
      },
      {
        "id": 52,
        "filename": "que54.cpp",
        "title": "Write a C++ program that takes a year from user and print whether that year is a leap year or not",
        "question": "Que 54 : \"Write a C++ program that takes a year from user and print whether that year is a leap year or not\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int year;\n\n    cout << \"Enter year: \";\n    cin >> year;\n\n    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){\n        cout << \"Leap year\";\n    }\n\n    else{\n        cout << \"Not a leap year\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que54.cpp -o que54 } ; if ($?) { .\\que54 }\nEnter year: 2008\nLeap year"
      },
      {
        "id": 53,
        "filename": "que55.cpp",
        "title": "Write a C++ program to input 5 numbers from keyboard and find their sum and average",
        "question": "Que 55 : \"Write a C++ program to input 5 numbers from keyboard and find their sum and average\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int a;\n    int b;\n    int c;\n    int d;\n    int e;\n\n    cout << \"Enter 5 numbers: \";\n    cin >> a >> b >> c >> d >> e;\n\n    int sum = a + b + c + d + e;\n    cout << \"Sum : \" << sum << \"\\n\";\n    cout << \"Average : \" << sum /5  ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que55.cpp -o que55 } ; if ($?) { .\\que55 }\nEnter 5 numbers: 6\n6\n6\n6\n6\nSum : 30\nAverage : 6"
      },
      {
        "id": 54,
        "filename": "que56.cpp",
        "title": "Write a program in C++ to display the first 5 natural numbers",
        "question": "Que 56 : \"Write a program in C++ to display the first 5 natural numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    cout << \"First 5 natural numbers are :\\n\";\n    for (int i = 1; i <= 5; i++){\n        cout << i << \" \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que56.cpp -o que56 } ; if ($?) { .\\que56 }\nFirst 5 natural numbers are :\n1 2 3 4 5"
      },
      {
        "id": 55,
        "filename": "que57.cpp",
        "title": "Write a C++ program to check vowel or consonant",
        "question": "Que 57 : \"Write a C++ program to check vowel or consonant\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    char ch;\n\n    cout << \"Enter a character: \";\n    cin >> ch;\n\n    if (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))){\n        cout << \"Not alphabet \";\n        return 0;\n    }\n\n    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'){\n        cout << \"Vowel \";\n    }\n\n    if (!(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')){\n        cout << \"Consonant\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que40.cpp -o que40 } ; if ($?) { .\\que40 }\nEnter a character: E\nVowel"
      },
      {
        "id": 56,
        "filename": "que58.cpp",
        "title": "Write a C++ program to display the cube of the number upto given an integer",
        "question": "Que 58 : \"Write a C++ program to display the cube of the number upto given an integer\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n\n    cout << \"Enter a number: \";\n    cin >> n;\n    for (int i = 1; i <= n; i++){\n        cout << \"Cube of \" << i << \" is \" << i * i * i << \"\\n\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que58.cpp -o que58 } ; if ($?) { .\\que58 }\nEnter a number: 5\nCube of 1 is 1\nCube of 2 is 8\nCube of 3 is 27\nCube of 4 is 64\nCube of 5 is 125"
      },
      {
        "id": 57,
        "filename": "que59.cpp",
        "title": "Write a C++ program to display the n terms of odd natural number and their sum",
        "question": "Que 59 : \"Write a C++ program to display the n terms of odd natural number and their sum\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int sum = 0;\n\n    cout << \"Enter number of terms : \";\n    cin >> n;\n\n    cout << \"Odd numbers are : \";\n    for (int i = 1; i <= n; i++){\n        int odd = 2 * i - 1;\n        cout << odd << \" \";\n        sum += odd;\n    }\n\n    cout << \"\\nSum is: \" << sum ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que59.cpp -o que59 } ; if ($?) { .\\que59 }\nEnter number of terms : 5\nOdd numbers are : 1 3 5 7 9 \nSum is: 25"
      },
      {
        "id": 58,
        "filename": "que60.cpp",
        "title": "Write a C++ program to display the multiplication table of a given integer",
        "question": "Que 60 : \"Write a C++ program to display the multiplication table of a given integer\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int number;\n\n    cout << \"Enter a number : \";\n    cin >> number;\n\n    for (int i = 1; i <= 10; i++){\n        cout << number << \" x \" << i << \" = \" << number * i << \"\\n\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que60.cpp -o que60 } ; if ($?) { .\\que60 }\nEnter a number : 5\n5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50"
      },
      {
        "id": 59,
        "filename": "que61.cpp",
        "title": "Write a C++ program that reads an integer and check whether it is negative, zero, or positive",
        "question": "Que 61 : \"Write a C++ program that reads an integer and check whether it is negative, zero, or positive\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int number;\n\n    cout << \"Enter a number: \";\n    cin >> number;\n\n    if (number > 0){\n        cout << \"Positive number\";\n    }\n\n    else if (number < 0){\n        cout << \"Negative number\";\n    }\n\n    else{\n        cout << \"Zero\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que52.cpp -o que52 } ; if ($?) { .\\que52 }\nEnter a number: -23\nNegative number"
      },
      {
        "id": 60,
        "filename": "que62.cpp",
        "title": "Write a C++ program that reads an positive integer and count the number of digits",
        "question": "Que 62 : \"Write a C++ program that reads an positive integer and count the number of digits\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int number;\n    int count = 0;\n\n    cout << \"Enter a positive integer : \";\n    cin >> number;\n\n    if (number == 0){\n        cout << \"Number of digits: 1\";\n        return 0;\n    }\n\n    while (number > 0){\n        count++;\n        number = number / 10;\n    }\n\n    cout << \"Number of digits : \" << count ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que62.cpp -o que62 } ; if ($?) { .\\que62 }\nEnter a positive integer : 45666\nNumber of digits : 5"
      },
      {
        "id": 61,
        "filename": "que63.cpp",
        "title": "Write a C++ program that accepts three numbers and check All numbers are equal or not",
        "question": "Que 63 : \"Write a C++ program that accepts three numbers and check All numbers are equal or not\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int a;\n    int b;\n    int c;\n\n    cout << \"Enter three numbers: \";\n    cin >> a >> b >> c;\n\n    if (a == b && b == c){\n        cout << \"equal\";\n    }\n\n    else{\n        cout << \"not equal\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que63.cpp -o que63 } ; if ($?) { .\\que63 }\nEnter three numbers: 5\n5\n5\n equal"
      },
      {
        "id": 62,
        "filename": "que64.cpp",
        "title": "Write a C++ program that accepts three numbers from the user and check if numbers are in increasing or decreasing order",
        "question": "Que 64 : \"Write a C++ program that accepts three numbers from the user and check if numbers are in increasing or decreasing order\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int a;\n    int b;\n    int c;\n\n    cout << \"Enter three numbers: \";\n    cin >> a >> b >> c;\n\n    if (a < b && b < c){\n        cout << \"Increasing order\";\n    }\n\n    else if (a > b && b > c){\n        cout << \"Decreasing order\";\n    }\n\n    else{\n        cout << \"nothing \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que64.cpp -o que64 } ; if ($?) { .\\que64 }\nEnter three numbers: \n2\n5\n9\nIncreasing order"
      },
      {
        "id": 63,
        "filename": "que65.cpp",
        "title": "Write a C++ program that determines a student’s grade",
        "question": "Que 65 : \"Write a C++ program that determines a student’s grade\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int marks;\n\n    cout << \"Enter marks: \";\n    cin >> marks;\n\n    if (marks < 0 || marks > 100){\n        cout << \"Invalid marks\";\n        return 0;\n    }\n\n    if (marks >= 90){\n        cout << \"Grade A\";\n    }\n\n    else if (marks >= 80){\n        cout << \"Grade B\";\n    }\n\n    else if (marks >= 70){\n        cout << \"Grade C\";\n    }\n\n    else if (marks >= 60){\n        cout << \"Grade D\";\n    }\n\n    else{\n        cout << \"Grade F\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que65.cpp -o que65 } ; if ($?) { .\\que65 }\nEnter marks: 6\nGrade F"
      },
      {
        "id": 64,
        "filename": "que66.cpp",
        "title": "Write a C++ program to create a simple calculator",
        "question": "Que 66 : \"Write a C++ program to create a simple calculator\"",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n\n    int choice;\n    int a, b;\n\n    cout << \"Select operation:\\n\";\n    cout << \"1. Addition\\n\";\n    cout << \"2. Subtraction\\n\";\n    cout << \"3. Multiplication\\n\";\n    cout << \"4. Division\\n\";\n    cout << \"5. Modulus\\n\";\n\n    cout << \"Enter your choice : \";\n    cin >> choice;\n\n    cout << \"Enter two numbers: \";\n    cin >> a >> b;\n\n    switch(choice) {\n\n        case 1:\n            cout << \"Result: \" << a + b ;\n            break;\n\n        case 2:\n            cout << \"Result: \" << a - b ;\n            break;\n\n        case 3:\n            cout << \"Result: \" << a * b ;\n            break;\n\n        case 4:\n            if (b == 0) {\n                cout << \"Division by zero not possible\";\n            } else {\n                cout << \"Result: \" << a / b ;\n            }\n            break;\n\n        case 5:\n            if (b == 0) {\n                cout << \"Division by zero not possible\";\n            } else {\n                cout << \"Result: \" << a % b ;\n            }\n            break;\n\n        default:\n            cout << \"Invalid choice\";\n    }\n\n    return 0;\n}",
        "output": "S D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que66.cpp -o que66 } ; if ($?) { .\\que66 }\nSelect operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Modulus\nEnter your choice : 3\nEnter two numbers: 445\n3\nResult: 1335"
      },
      {
        "id": 65,
        "filename": "que67.cpp",
        "title": "Write a C++ program to concatenate two string",
        "question": "Que 67 : \"Write a C++ program to concatenate two string\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string first;\n    string second;\n\n    cout << \"Enter first string: \";\n    cin >> first;\n\n    cout << \"Enter second string: \";\n    cin >> second;\n\n    string result = first + second;\n\n    cout << \"Concatenated string: \" << result ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que67.cpp -o que67 } ; if ($?) { .\\que67 }\nEnter first string: hello \nEnter second string: workd\nConcatenated string: helloworkd"
      },
      {
        "id": 66,
        "filename": "que68.cpp",
        "title": "Write a C++ program to convert all characters in a string to lowercase",
        "question": "Que 68 : \"Write a C++ program to convert all characters in a string to lowercase\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n\n    cout << \"Enter a string: \";\n    getline(cin, text);\n\n    for (int i = 0; i < text.length(); i++){\n        if (text[i] >= 'A' && text[i] <= 'Z'){\n            text[i] = text[i] + 32;\n        }\n    }\n\n    cout << \"Lowercase string: \" << text ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que68.cpp -o que68 } ; if ($?) { .\\que68 }\nEnter a string: HELLOOOO\nLowercase string: helloooo"
      },
      {
        "id": 67,
        "filename": "que69.cpp",
        "title": "Write a C++ program to convert all characters in a string to uppercase",
        "question": "Que 69 : \"Write a C++ program to convert all characters in a string to uppercase\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n\n    cout << \"Enter a string: \";\n    getline(cin, text);\n\n    for (int i = 0; i < (int)text.length(); i++){\n        if (text[i] >= 'a' && text[i] <= 'z'){\n            text[i] = text[i] - 32;\n        }\n    }\n\n    cout << \"Uppercase string: \" << text ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que69.cpp -o que69 } ; if ($?) { .\\que69 }\nEnter a string: helloooo\nUppercase string: HELLOOOO"
      },
      {
        "id": 68,
        "filename": "que70.cpp",
        "title": "Write a C++ program to trim a string",
        "question": "Que 70 : \"Write a C++ program to trim a string\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n\n    cout << \"Enter a string: \";\n    getline(cin, text);\n\n    int start = 0;\n    int end = text.length() - 1;\n\n    while (start <= end && text[start] == ' '){\n        start++;\n    }\n\n    while (end >= start && text[end] == ' '){\n        end--;\n    }\n\n    string trimmed = \"\";\n    for (int i = start; i <= end; i++){\n        trimmed += text[i];\n    }\n\n    cout << \"Trimmed string : \" << trimmed ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que70.cpp -o que70 } ; if ($?) { .\\que70 }\nEnter a string:    jsdjs   jh      \nTrimmed string : jsdjs   jh"
      },
      {
        "id": 69,
        "filename": "que71.cpp",
        "title": "Write a C++ program to get a substring between two positions",
        "question": "Que 71 : \"Write a C++ program to get a substring between two positions\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n    int start;\n    int end;\n\n    cout << \"Enter a string: \";\n    getline(cin, text);\n\n    cout << \"Enter start and end positions: \";\n    cin >> start >> end;\n\n    if (start < 0 || end >= text.length() || start > end){\n        cout << \"Invalid positions\";\n        return 0;\n    }\n\n    string sub = \"\";\n    for (int i = start; i <= end; i++){\n        sub += text[i];\n    }\n\n    cout << \"Substring: \" << sub ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que71.cpp -o que71 } ; if ($?) { .\\que71 }\nEnter a string: hello world \nEnter start and end positions: 4\n6\nSubstring: o w"
      },
      {
        "id": 70,
        "filename": "que72.cpp",
        "title": "Write a C++ program to replace all the ‘d’ characters with ‘f’ characters",
        "question": "Que 72 : \"Write a C++ program to replace all the ‘d’ characters with ‘f’ characters\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n\n    cout << \"Enter a string: \";\n    getline(cin, text);\n\n    for (int i = 0; i < (int)text.length(); i++){\n        if (text[i] == 'd'){\n            text[i] = 'f';\n        }\n    }\n\n    cout << \"Updated string : \" << text ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que72.cpp -o que72 } ; if ($?) { .\\que72 }\nEnter a string: hedddloo\nUpdated string : hefffloo"
      },
      {
        "id": 71,
        "filename": "que73.cpp",
        "title": "Write a C++ program to get the length of a given string",
        "question": "Que 73 : \"Write a C++ program to get the length of a given string\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n\n    cout << \"Enter a string: \";\n    getline(cin, text);\n\n    cout << \"Length of string: \" << text.length() ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que73.cpp -o que73 } ; if ($?) { .\\que73 }\nEnter a string: hello world\nLength of string: 11"
      },
      {
        "id": 72,
        "filename": "que75.cpp",
        "title": "Write a C++ program to get the character at the given index",
        "question": "Que 75 : \"Write a C++ program to get the character at the given index\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n    int index;\n\n    cout << \"Enter a string: \";\n    getline(cin, text);\n\n    cout << \"Enter index: \";\n    cin >> index;\n\n    cout << \"Character is: \" << text[index] ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que75.cpp -o que75 } ; if ($?) { .\\que75 }\nEnter a string: Hello World\nEnter index: 4\nCharacter is: o"
      },
      {
        "id": 73,
        "filename": "que76.cpp",
        "title": "Write a C++ program to remove a particular character from a string",
        "question": "Que 76 : \"Write a C++ program to remove a particular character from a string\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n    char c;\n    string result = \"\";\n\n    cout << \"Enter a string: \";\n    getline(cin, text);\n\n    cout << \"Enter character to remove: \";\n    cin >> c;\n\n    for (int i = 0; i < (int)text.length(); i++){\n        if (text[i] != c){\n            result += text[i];\n        }\n    }\n\n    cout << \"Updated string : \" << result ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que76.cpp -o que76 } ; if ($?) { .\\que76 }\nEnter a string: Hello World\nEnter character to remove:  \no\nUpdated string : Hell Wrld"
      },
      {
        "id": 74,
        "filename": "que77.cpp",
        "title": "Write a C++ program to reverse a String",
        "question": "Que 77 : \"Write a C++ program to reverse a String\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n\n    cout << \"Enter a string: \";\n    getline(cin, text);\n\n    int left = 0;\n    int right = text.length() - 1;\n\n    while (left < right){\n        char temp = text[left];\n        text[left] = text[right];\n        text[right] = temp;\n        left++;\n        right--;\n    }\n\n    cout << \"Reversed string: \" << text ;\n    return 0;\n}",
        "output": "S D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que77.cpp -o que77 } ; if ($?) { .\\que77 }\nEnter a string: Hellooooo\nReversed string: ooooolleH"
      },
      {
        "id": 75,
        "filename": "que78.cpp",
        "title": "Write a C++ program to remove html tags from a string",
        "question": "Que 78 : \"Write a C++ program to remove html tags from a string\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n    string result = \"\";\n    int inTag = 0;\n\n    cout << \"Enter html string : \";\n    getline(cin, text);\n\n    for (int i = 0; i < (int)text.length(); i++){\n        if (text[i] == '<'){\n            inTag = 1;\n        }\n\n        else if (text[i] == '>'){\n            inTag = 0;\n        }\n\n        else if (inTag == 0){\n            result += text[i];\n        }\n    }\n\n    cout  << result ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que78.cpp -o que78 } ; if ($?) { .\\que78 }\nEnter html string : <tag> Hello World </tag>\n Hello World"
      },
      {
        "id": 76,
        "filename": "que79.cpp",
        "title": "Write a C++ program to count total number of lines from a string",
        "question": "Que 79 : \"Write a C++ program to count total number of lines from a string\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n    int lines = 1;\n\n    cout << \"Enter text : \";\n    getline(cin, text);\n\n    for (int i = 0; i < (int)text.length(); i++){\n        if (text[i] == '\\n'){\n            lines++;\n        }\n    }\n\n    cout << \"Total lines: \" << lines ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que79.cpp -o que79 } ; if ($?) { .\\que79 }\nEnter text : hello\nTotal lines: 1"
      },
      {
        "id": 77,
        "filename": "que80.cpp",
        "title": "Write a C++ Program to Accept Marks and find Total and Percentage",
        "question": "Que 80 : \"Write a C++ Program to Accept Marks and find Total and Percentage\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int m1;\n    int m2;\n    int m3;\n    int m4;\n    int m5;\n\n    cout << \"Enter marks of 5 subjects : \";\n    cin >> m1 >> m2 >> m3 >> m4 >> m5;\n\n    int total = m1 + m2 + m3 + m4 + m5;\n    cout << \"Total marks: \" << total << \"\\n\";\n    cout << \"Percentage: \" << total / 5 << \"%\";\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que80.cpp -o que80 } ; if ($?) { .\\que80 }\nEnter marks of 5 subjects : 6\n6\n6\n6\n6\nTotal marks: 30\nPercentage: 6%"
      },
      {
        "id": 78,
        "filename": "que81.cpp",
        "title": "Write a C++ program to print numbers from 1 to 10 using loop",
        "question": "Que 81 : \"Write a C++ program to print numbers from 1 to 10 using loop\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    for (int i = 1; i <= 10; i++){\n        cout << i << \" \";\n    }\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que81.cpp -o que81 } ; if ($?) { .\\que81 }\n1 2 3 4 5 6 7 8 9 10"
      },
      {
        "id": 79,
        "filename": "que82.cpp",
        "title": "Write a C++ program to calculate sum of first 10 natural numbers",
        "question": "Que 82 : \"Write a C++ program to calculate sum of first 10 natural numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int sum = 0;\n\n    for (int i = 1; i <= 10; i++){\n        sum += i;\n    }\n\n    cout << \"Sum : \" << sum ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que82.cpp -o que82 } ; if ($?) { .\\que82 }\nSum : 55"
      },
      {
        "id": 80,
        "filename": "que83.cpp",
        "title": "Write a C++ program to print multiplication table",
        "question": "Que 83 : \"Write a C++ program to print multiplication table\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int number;\n\n    cout << \"Enter a number: \";\n    cin >> number;\n\n    for (int i = 1; i <= 10; i++){\n        cout << number << \" x \" << i << \" = \" << number * i << \"\\n\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que83.cpp -o que83 } ; if ($?) { .\\que83 }\nEnter a number: 5\n5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50"
      },
      {
        "id": 81,
        "filename": "que84.cpp",
        "title": "Write a C++ program to find factorial using loop",
        "question": "Que 84 : \"Write a C++ program to find factorial using loop\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int factorial = 1;\n\n    cout << \"Enter a number: \";\n    cin >> n;\n\n    for (int i = 1; i <= n; i++){\n        factorial *= i;\n    }\n\n    cout << \"Factorial is : \" << factorial ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que42.cpp -o que42 } ; if ($?) { .\\que42 }\nEnter a number: 7\nFactorial is : 5040"
      },
      {
        "id": 82,
        "filename": "que86.cpp",
        "title": "Write a C++ program to sum even and odd integers",
        "question": "Que 86 : \"Write a C++ program to sum even and odd integers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int evenSum = 0;\n    int oddSum = 0;\n\n    cout << \"Enter value of n: \";\n    cin >> n;\n\n    for (int i = 1; i <= n; i++){\n        if (i % 2 == 0){\n            evenSum += i;\n        }\n\n        else{\n            oddSum += i;\n        }\n    }\n\n    cout << \"Sum of even : \" << evenSum << \"\\n\";\n    cout << \"Sum of odd : \" << oddSum ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que86.cpp -o que86 } ; if ($?) { .\\que86 }\nEnter value of n: 89\nSum of even : 1980\nSum of odd : 2025"
      },
      {
        "id": 83,
        "filename": "que87.cpp",
        "title": "Write a C++ program to check prime number",
        "question": "Que 87 : \"Write a C++ program to check prime number\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int number;\n    int prime = 1;\n\n    cout << \"Enter a number: \";\n    cin >> number;\n\n    if (number < 2){\n        cout << \"Not prime\";\n        return 0;\n    }\n\n    for (int i = 2; i * i <= number; i++){\n        if (number % i == 0){\n            prime = 0;\n            break;\n        }\n    }\n\n    if (prime == 1){\n        cout << \"Prime number\";\n    }\n\n    if (prime == 0){\n        cout << \"Not prime\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que87.cpp -o que87 } ; if ($?) { .\\que87 }\nEnter a number: 61\nPrime number"
      },
      {
        "id": 84,
        "filename": "que88.cpp",
        "title": "Write a C++ program to calculate HCF",
        "question": "Que 88 : \"Write a C++ program to calculate HCF\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int a;\n    int b;\n\n    cout << \"Enter two numbers: \";\n    cin >> a >> b;\n\n    if (a < 0){\n        a = -a;\n    }\n\n    if (b < 0){\n        b = -b;\n    }\n\n    while (b != 0){\n        int rem = a % b;\n        a = b;\n        b = rem;\n    }\n\n    cout << \"HCF is: \" << a ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que88.cpp -o que88 } ; if ($?) { .\\que88 }\nEnter two numbers: 5\n7\nHCF is: 1"
      },
      {
        "id": 85,
        "filename": "que89.cpp",
        "title": "Write a C++ program to count positives, negatives and zeros",
        "question": "Que 89 : \"Write a C++ program to count positives, negatives and zeros\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int value;\n    int positives = 0;\n    int negatives = 0;\n    int zeros = 0;\n\n    cout << \"Enter count of numbers: \";\n    cin >> n;\n\n    for (int i = 1; i <= n; i++){\n        cin >> value;\n\n        if (value > 0){\n            positives++;\n        }\n\n        else if (value < 0){\n            negatives++;\n        }\n\n        else{\n            zeros++;\n        }\n    }\n\n    cout << \"Positives: \" << positives << \"\\n\";\n    cout << \"Negatives: \" << negatives << \"\\n\";\n    cout << \"Zeros: \" << zeros ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que89.cpp -o que89 } ; if ($?) { .\\que89 }\nEnter count of numbers: 10\n3\n4\n-4\n-4\n-6\n0\n0\n0\n0\n2\nPositives: 3\nNegatives: 3\nZeros: 4"
      },
      {
        "id": 86,
        "filename": "que90.cpp",
        "title": "Write a C++ program to find largest and smallest numbers",
        "question": "Que 90 : \"Write a C++ program to find largest and smallest numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n\n    cout << \"Enter count of numbers: \";\n    cin >> n;\n\n    int value;\n    cin >> value;\n\n    int largest = value;\n    int smallest = value;\n\n    for (int i = 2; i <= n; i++){\n        cin >> value;\n\n        if (value > largest){\n            largest = value;\n        }\n\n        if (value < smallest){\n            smallest = value;\n        }\n    }\n\n    cout << \"Largest number: \" << largest << \"\\n\";\n    cout << \"Smallest number: \" << smallest ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que90.cpp -o que90 } ; if ($?) { .\\que90 } \nEnter count of numbers: 8\n5\n5\n5\n545\n55\n89\n76\n54\nLargest number: 545\nSmallest number: 5"
      },
      {
        "id": 87,
        "filename": "que91.cpp",
        "title": "Write a C++ program to print Armstrong numbers",
        "question": "Que 91 : \"Write a C++ program to print Armstrong numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int limit;\n\n    cout << \"Enter limit : \";\n    cin >> limit;\n\n    cout << \"Armstrong numbers are : \\n\";\n\n    for (int number = 1; number <= limit; number++){\n        int temp = number;\n        int digits = 0;\n\n        while (temp > 0){\n            digits++;\n            temp = temp / 10;\n        }\n\n        if (number == 0){\n            digits = 1;\n        }\n\n        temp = number;\n        int sum = 0;\n\n        while (temp > 0){\n            int digit = temp % 10;\n            int power = 1;\n\n            for (int i = 1; i <= digits; i++){\n                power *= digit;\n            }\n\n            sum += power;\n            temp = temp / 10;\n        }\n\n        if (number == 0){\n            sum = 0;\n        }\n\n        if (sum == number){\n            cout << number << \" \";\n        }\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que91.cpp -o que91 } ; if ($?) { .\\que91 }\nEnter limit : 32323\nArmstrong numbers are : \n1 2 3 4 5 6 7 8 9 153 370 371 407 1634 8208 9474"
      },
      {
        "id": 88,
        "filename": "que92.cpp",
        "title": "Write a C++ program to count notes in amount",
        "question": "Que 92 : \"Write a C++ program to count notes in amount\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int amount;\n\n    cout << \"Enter amount: \";\n    cin >> amount;\n\n    if (amount < 0){\n        cout << \"Invalid amount\\n\";\n        return 0;\n    }\n\n    int note500 = amount / 500;\n    amount = amount % 500;\n\n    int note200 = amount / 200;\n    amount = amount % 200;\n\n    int note100 = amount / 100;\n    amount = amount % 100;\n\n    int note50 = amount / 50;\n    amount = amount % 50;\n\n    int note20 = amount / 20;\n    amount = amount % 20;\n\n    int note10 = amount / 10;\n    amount = amount % 10;\n\n    int note5 = amount / 5;\n    amount = amount % 5;\n\n    int note2 = amount / 2;\n    amount = amount % 2;\n\n    int note1 = amount;\n\n    cout << \"500: \" << note500 << \"\\n\";\n    cout << \"200: \" << note200 << \"\\n\";\n    cout << \"100: \" << note100 << \"\\n\";\n    cout << \"50: \" << note50 << \"\\n\";\n    cout << \"20: \" << note20 << \"\\n\";\n    cout << \"10: \" << note10 << \"\\n\";\n    cout << \"5: \" << note5 << \"\\n\";\n    cout << \"2: \" << note2 << \"\\n\";\n    cout << \"1: \" << note1 ;\n    return 0;\n}",
        "output": "S D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que92.cpp -o que92 } ; if ($?) { .\\que92 }\nEnter amount: 45464\n500: 90\n200: 2\n100: 0\n50: 1\n20: 0\n10: 1\n5: 0\n2: 2\n1: 0"
      },
      {
        "id": 89,
        "filename": "que93.cpp",
        "title": "Write a C++ program to print Fibonacci series",
        "question": "Que 93 : \"Write a C++ program to print Fibonacci series\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n\n    cout << \"Enter number of terms: \";\n    cin >> n;\n\n    int first = 0;\n    int second = 1;\n\n    for (int i = 1; i <= n; i++){\n        if (i == 1){\n            cout << first << \" \";\n        }\n\n        else if (i == 2){\n            cout << second << \" \";\n        }\n\n        else{\n            int next = first + second;\n            cout << next << \" \";\n            first = second;\n            second = next;\n        }\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que93.cpp -o que93 } ; if ($?) { .\\que93 }\nEnter number of terms: 20\n0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181"
      },
      {
        "id": 90,
        "filename": "que94.cpp",
        "title": "Write a C++ program to calculate series sum",
        "question": "Que 94 : \"Write a C++ program to calculate series sum\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int n;\n    int sum = 0;\n\n    cout << \"Enter n: \";\n    cin >> n;\n\n    for (int i = 1; i <= n; i++){\n        sum += i;\n    }\n\n    cout << \"sum : \" << sum ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que94.cpp -o que94 } ; if ($?) { .\\que94 }\nEnter n: 10\nsum : 55"
      },
      {
        "id": 91,
        "filename": "que95.cpp",
        "title": "Write a C++ method to compute average of three numbers",
        "question": "Que 95 : \"Write a C++ method to compute average of three numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int a;\n    int b;\n    int c;\n\n    cout << \"Enter three numbers: \";\n    cin >> a >> b >> c;\n\n    cout << \"Average : \" << (a + b + c) / 3;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que95.cpp -o que95 } ; if ($?) { .\\que95 }\nEnter three numbers: 5\n5\n5\nAverage : 5"
      },
      {
        "id": 92,
        "filename": "que96.cpp",
        "title": "Write a C++ method to find smallest among three numbers",
        "question": "Que 96 : \"Write a C++ method to find smallest among three numbers\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\nint main(){\n\n    int a;\n    int b;\n    int c;\n\n    cout << \"Enter three numbers: \";\n    cin >> a >> b >> c;\n    int s = a;\n\n    if (b < s){\n        s = b;\n    }\n\n    if (c < s){\n        s = c;\n    }\n\n    cout << \"Smallest : \" << s ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que96.cpp -o que96 } ; if ($?) { .\\que96 }\nEnter three numbers: 5\n45\n77\nSmallest : 5"
      },
      {
        "id": 93,
        "filename": "que97.cpp",
        "title": "Write a C++ method to check leap year",
        "question": "Que 97 : \"Write a C++ method to check leap year\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int year;\n\n    cout << \"Enter year: \";\n    cin >> year;\n\n    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){\n        cout << \"Leap year\";\n    }\n\n    else{\n        cout << \"Not a leap year\";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que54.cpp -o que54 } ; if ($?) { .\\que54 }\nEnter year: 2008\nLeap year"
      },
      {
        "id": 94,
        "filename": "que99.cpp",
        "title": "Write a C++ method to sum digits",
        "question": "Que 99 : \"Write a C++ method to sum digits\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int number;\n    int sum = 0;\n\n    cout << \"Enter an integer: \";\n    cin >> number;\n    while (number > 0){\n        sum += number % 10;\n        number = number / 10;\n    }\n\n    cout << \"Sum of digits: \" << sum ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\CPP_Que\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\\que10 }\nEnter an integer: 4444\nSum of digits: 16"
      },
      {
        "id": 95,
        "filename": "que100.cpp",
        "title": "Write a C++ method to calculate area of triangle",
        "question": "Que 100 : \"Write a C++ method to calculate area of triangle\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int base;\n    int height;\n\n    cout << \"Enter base and height: \";\n    cin >> base >> height;\n    cout << \"Area of triangle is : \" << (base * height) / 2;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que27.cpp -o que27 } ; if ($?) { .\\que27 }\nEnter base and height: 7\n7\nArea of triangle is : 24"
      },
      {
        "id": 96,
        "filename": "que101.cpp",
        "title": "Write a C++ method to find area of pentagon",
        "question": "Que 101 : \"Write a C++ method to find area of pentagon\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\nint main(){\n\n    int side;\n    int apothem;\n\n    cout << \"Enter side and apothem: \";\n    cin >> side >> apothem;\n    cout << \"Area of pentagon is: \" << (5 * side * apothem) / 2;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que101.cpp -o que101 } ; if ($?) { .\\que101 }\nEnter side and apothem: 5\n6\nArea of pentagon is: 75"
      },
      {
        "id": 97,
        "filename": "que102.cpp",
        "title": "Write a C++ method to check even number",
        "question": "Que 102 : \"Write a C++ method to check even number\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\n\nint main(){\n\n    int number;\n\n    cout << \"Enter a number: \";\n    cin >> number;\n\n    if (number % 2 == 0){\n        cout << \"Even \";\n    }\n\n    else{\n        cout << \"Odd \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que102.cpp -o que102 } ; if ($?) { .\\que102 }\nEnter a number: 45\nOdd"
      },
      {
        "id": 98,
        "filename": "que103.cpp",
        "title": "Write a C++ method to check palindrome number",
        "question": "Que 103 : \"Write a C++ method to check palindrome number\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int number;\n\n    cout << \"Enter a positive number: \";\n    cin >> number;\n\n    int original = number;\n    int reverse = 0;\n\n    while (number > 0){\n        reverse = reverse * 10 + (number % 10);\n        number = number / 10;\n    }\n\n    if (original == reverse){\n        cout << \"Palindrome \";\n    }\n\n    if (original != reverse){\n        cout << \"Not palindrome \";\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que22.cpp -o que22 } ; if ($?) { .\\que22 }\nEnter a positive number: 1221\nPalindrome"
      },
      {
        "id": 99,
        "filename": "que104.cpp",
        "title": "Write a C++ method to display prime numbers",
        "question": "Que 104 : \"Write a C++ method to display prime numbers\"",
        "code": "#include <iostream>\nusing namespace std;\n\nint main(){\n\n    int limit;\n\n    cout << \"Enter limit: \";\n    cin >> limit;\n\n    if (limit < 2){\n        cout << \"No prime numbers\";\n        return 0;\n    }\n\n    cout << \"Prime numbers are :\\n\";\n\n    for (int i = 2; i <= limit; i++){\n\n        bool isPrime = true;  \n\n        for (int j = 2; j * j <= i; j++){\n            if (i % j == 0){\n                isPrime = false;\n                break;\n            }\n        }\n\n        if (isPrime){\n            cout << i << \" \";\n        }\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que104.cpp -o que104 } ; if ($?) { .\\que104 }\nEnter limit: 100\nPrime numbers are :\n2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97"
      },
      {
        "id": 100,
        "filename": "que106.cpp",
        "title": "Write a C++ method to find factorial using recursion",
        "question": "Que 106 : \"Write a C++ method to find factorial using recursion\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint factorial(int n){\n\n    if (n == 0 || n == 1){\n        return 1;\n    }\n\n    return n * factorial(n - 1);\n}\n\n\nint main(){\n\n    int n;\n\n    cout << \"Enter a number: \";\n    cin >> n;\n\n    cout << \"Factorial is: \" << factorial(n) ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que106.cpp -o que106 } ; if ($?) { .\\que106 }\nEnter a number: 5\nFactorial is: 120"
      },
      {
        "id": 101,
        "filename": "que110.cpp",
        "title": "Write a C++ program to round division result",
        "question": "Que 110 : \"Write a C++ program to round division result\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int b;\n    int c;\n\n    cout << \"Enter b and c: \";\n    cin >> b >> c;\n\n    int a = b / c;\n    int remainder = b % c;\n\n    if (remainder * 2 >= c){\n        a++;\n    }\n\n    cout << \"Rounded division : \" << a ;\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que110.cpp -o que110 } ; if ($?) { .\\que110 }\nEnter b and c: 344\n7\nRounded division : 49"
      },
      {
        "id": 102,
        "filename": "que112.cpp",
        "title": "Write a C++ program to convert float to absolute value",
        "question": "Que 112 : \"Write a C++ program to convert float to absolute value\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string value;\n\n    cout << \"Enter float value: \";\n    cin >> value;\n\n    if (value.length() > 0 && value[0] == '-'){\n        string absolute = \"\";\n\n        for (int i = 1; i < (int)value.length(); i++){\n            absolute += value[i];\n        }\n\n        cout << \"Absolute value: \" << absolute ;\n    }\n\n    else{\n        cout << \"Absolute value: \" << value ;\n    }\n\n    return 0;\n}",
        "output": "PS D:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113> cd \"d:\\tmp\\cpp_website\\05-Basic_Programming_Constructs_113\\\" ; if ($?) { g++ que112.cpp -o que112 } ; if ($?) { .\\que112 }\nEnter float value: 43.434\nAbsolute value: 43"
      }
    ]
  },
  {
    "id": 6,
    "slug": "inheritance",
    "title": "Inheritance",
    "subtitle": "10 Problems",
    "description": "Curated C++ practice problems focused on inheritance concepts and patterns.",
    "questions": [
      {
        "id": 1,
        "filename": "que1.cpp",
        "title": "Write a C++ program to create a class called Animal with a method called makeSound(). Create a derived class called Cat that overrides the makeSound() method to bark.",
        "question": "Que 1 : \"Write a C++ program to create a class called Animal with a method called makeSound(). Create a derived class called Cat that overrides the makeSound() method to bark.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Animal{\n\npublic:\n    virtual void makeSound(){\n        cout << \"Animal sound\";\n    }\n};\n\n\nclass Cat : public Animal{\n\npublic:\n    void makeSound(){\n        cout << \"Bark\";\n    }\n};\n\n\nint main(){\n\n    Animal animal;\n    Cat cat;\n\n    animal.makeSound();\n    cat.makeSound();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\04-Multi_Dimension_Arrays_12> cd \"e:\\dddddddd\\CPP_Que\\06-Inheritance_10\\\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\\que1 }\nAnimal soundBark"
      },
      {
        "id": 2,
        "filename": "que2.cpp",
        "title": "Write a C++ program to create a class called Vehicle with a method called drive(). Create a derived class called Car that overrides the drive() method to print \"Repairing a car\".",
        "question": "Que 2 : \"Write a C++ program to create a class called Vehicle with a method called drive(). Create a derived class called Car that overrides the drive() method to print \\\"Repairing a car\\\".\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Vehicle{\n\n    public:\n        virtual void drive(){\n            cout << \"Driving vehicle\"<<endl;\n        }\n};\n\n\nclass Car : public Vehicle{\n\n    public:\n\n        void drive(){\n            cout << \"driving car\";\n        }\n\n};\n\n\nint main(){\n\n    Vehicle vehicle;\n    Car car;\n\n    vehicle.drive();\n    car.drive();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\06-Inheritance_10> cd \"e:\\dddddddd\\CPP_Que\\06-Inheritance_10\\\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\\que2 }\nDriving vehicle\ndriving car"
      },
      {
        "id": 3,
        "filename": "que3.cpp",
        "title": "Write a C++ program to create a class called Shape with a method called getArea(). Create a derived class called Rectangle that overrides the getArea() method to calculate the area of a rectangle.",
        "question": "Que 3 : \"Write a C++ program to create a class called Shape with a method called getArea(). Create a derived class called Rectangle that overrides the getArea() method to calculate the area of a rectangle.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Shape{\n\n    public:\n\n        virtual int getArea(){\n            return 0;\n        }\n};\n\n\nclass Rectangle : public Shape{\n\n    private:\n\n        int length;\n        int width;\n\n    public:\n\n        Rectangle(int l, int w){\n            length = l;\n            width = w;\n        }\n\n        int getArea(){\n            return length * width;\n        }\n    };\n\n\nint main(){\n\n    Rectangle rectangle(9, 6);\n\n    cout << \"Area of rectangle : \" << rectangle.getArea() ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\06-Inheritance_10> cd \"e:\\dddddddd\\CPP_Que\\06-Inheritance_10\\\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\\que3 }\nArea of rectangle : 54"
      },
      {
        "id": 4,
        "filename": "que4.cpp",
        "title": "Write a C++ program to create a class called Employee with methods called work() and getSalary(). Create a derived class called HRManager that overrides the work() method and adds a new method called addEmployee().",
        "question": "Que 4 : \"Write a C++ program to create a class called Employee with methods called work() and getSalary(). Create a derived class called HRManager that overrides the work() method and adds a new method called addEmployee().\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Employee{\n\n\n    protected:\n        int salary;\n\n    public:\n\n        Employee(int s){\n            salary = s;\n        }\n\n        virtual void work(){\n            cout << \"Employee is working \\n\"; \n        }\n\n        int getSalary(){\n            return salary;\n        }\n};\n\n\nclass HRManager : public Employee{\n\n    public:\n        HRManager(int s) : Employee(s){\n        }\n\n        void work(){\n            cout << \"HR Manager is working t\\n\";\n        }\n\n        void addEmployee(){\n            cout << \"employee added\\n\";\n        }\n};\n\n\nint main(){\n\n    HRManager hr(50000);\n\n    hr.work();\n    hr.addEmployee();\n    cout << \"Salary : \" << hr.getSalary() ;\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\06-Inheritance_10> cd \"e:\\dddddddd\\CPP_Que\\06-Inheritance_10\\\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\\que4 }\nHR Manager is working t\nemployee added\nSalary : 50000"
      },
      {
        "id": 5,
        "filename": "que5.cpp",
        "title": "Write a C++ program to create a class known as \"BankAccount\" with methods called deposit() and withdraw(). Create a derived class called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.",
        "question": "Que 5 : \"Write a C++ program to create a class known as \\\"BankAccount\\\" with methods called deposit() and withdraw(). Create a derived class called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass BankAccount{\n\nprotected:\n    int balance;\n\npublic:\n    BankAccount(int amount){\n        balance = amount;\n    }\n\n    void deposit(int amount){\n        balance += amount;\n    }\n\n    virtual void withdraw(int amount){\n        if (amount > balance){\n            cout << \"not enough balance\\n\";\n        }\n\n        else{\n            balance -= amount;\n            cout << \"Withdrawed \\n\";\n        }\n    }\n\n    int getBalance(){\n        return balance;\n    }\n};\n\n\nclass SavingsAccount : public BankAccount{\n\npublic:\n    SavingsAccount(int amount) : BankAccount(amount){\n    }\n\n    void withdraw(int amount){\n        if (balance - amount <100){\n            cout << \"min blaance 100 required \\n\";\n        }\n\n        else{\n            balance -= amount;\n            cout << \"Withdrawed \\n\";\n        }\n    }\n};\n\n\nint main(){\n\n    SavingsAccount account(500);\n    int a;\n    int b;\n\n    cout << \"Current balance : \" << account.getBalance()<<endl;\n    cout << \"Enter deposit amount : \";\n    cin >> a;\n    \n    account.deposit(a);\n    \n    cout << \"Current balance : \" << account.getBalance()<<endl;\n    cout << \"Enter withdraw amount : \";\n    cin >> b;\n\n    account.withdraw(b);\n    cout << \"Current balance : \" << account.getBalance();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\06-Inheritance_10> cd \"e:\\dddddddd\\CPP_Que\\06-Inheritance_10\\\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\\que5 }                   \nCurrent balance : 500\nEnter deposit amount : 400\nCurrent balance : 900\nEnter withdraw amount : 866\nmin blaance 100 required \nCurrent balance : 900"
      },
      {
        "id": 6,
        "filename": "que6.cpp",
        "title": "Write a C++ program to create a class called Animal with a method named move(). Create a derived class called Cheetah that overrides the move() method to run.",
        "question": "Que 6 : \"Write a C++ program to create a class called Animal with a method named move(). Create a derived class called Cheetah that overrides the move() method to run.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Animal{\n\npublic:\n    virtual void move(){\n        cout << \"moves\\n\";\n    }\n};\n\n\nclass Cheetah : public Animal{\n\npublic:\n    void move(){\n        cout << \"Cheetah runs\";\n    }\n};\n\n\nint main(){\n\n    Animal animal;\n    Cheetah cheetah;\n\n    animal.move();\n    cheetah.move();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\06-Inheritance_10> cd \"e:\\dddddddd\\CPP_Que\\06-Inheritance_10\\\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?) { .\\que6 }\nmoves\nCheetah runs"
      },
      {
        "id": 7,
        "filename": "que7.cpp",
        "title": "Write a C++ program to create a class known as Person with methods called getFirstName() and getLastName(). Create a derived class called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title.",
        "question": "Que 7 : \"Write a C++ program to create a class known as Person with methods called getFirstName() and getLastName(). Create a derived class called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Person{\n\nprotected:\n    string firstName;\n    string lastName;\n\npublic:\n    Person(string f, string l){\n        firstName = f;\n        lastName = l;\n    }\n\n    string getFirstName(){\n        return firstName;\n    }\n\n    virtual string getLastName(){\n        return lastName;\n    }\n};\n\n\nclass Employee : public Person{\n\nprivate:\n    int employeeId;\n    string jobTitle;\n\npublic:\n    Employee(string f, string l, int id, string title) : Person(f, l){\n        employeeId = id;\n        jobTitle = title;\n    }\n\n    int getEmployeeId(){\n        return employeeId;\n    }\n\n    string getLastName(){\n        return lastName + \" (\" + jobTitle + \")\";\n    }\n};\n\n\nint main(){\n\n    Employee emp(\"Ram\", \"Sahrma\", 300, \"HR\");\n\n    cout << \"First Name: \" << emp.getFirstName() << \"\\n\";\n    cout << \"Last Name with Title: \" << emp.getLastName() << \"\\n\";\n    cout << \"Employee ID: \" << emp.getEmployeeId() << \"\\n\";\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\06-Inheritance_10> cd \"e:\\dddddddd\\CPP_Que\\06-Inheritance_10\\\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\\que7 }\nFirst Name: Ram\nLast Name with Title: Sahrma (HR)\nEmployee ID: 300"
      },
      {
        "id": 8,
        "filename": "que8.cpp",
        "title": "Write a C++ program to create a class called Shape with methods called getPerimeter() and getArea(). Create a derived class called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.",
        "question": "Que 8 : \"Write a C++ program to create a class called Shape with methods called getPerimeter() and getArea(). Create a derived class called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Shape{\n\n    public:\n\n        virtual int getPerimeter(){\n            return 0;\n        }\n\n        virtual int getArea(){\n            return 0;\n        }\n};\n\n\nclass Circle : public Shape{\n\n    private:\n\n        int radius;\n\n    public:\n\n        Circle(int r){\n            radius = r;\n        }\n\n        int getPerimeter(){\n            return (2 * 22 * radius) / 7;\n        }\n\n        int getArea(){\n            return (22 * radius * radius) / 7;\n        }\n};\n\n\nint main(){\n\n\n    Circle circle(7);\n\n    cout << \"Perimeter of circle : \" << circle.getPerimeter() << \"\\n\";\n    cout << \"Area of circle : \" << circle.getArea() ;\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\06-Inheritance_10> cd \"e:\\dddddddd\\CPP_Que\\06-Inheritance_10\\\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\\que8 }\nPerimeter of circle : 44\nArea of circle : 154"
      },
      {
        "id": 9,
        "filename": "que9.cpp",
        "title": "Write a C++ program to create a vehicle class hierarchy. The base class should be Vehicle, with derived classes Truck, Car and Motorcycle. Each derived class should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.",
        "question": "Que 9 : \"Write a C++ program to create a vehicle class hierarchy. The base class should be Vehicle, with derived classes Truck, Car and Motorcycle. Each derived class should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Vehicle{\n\nprotected:\n    string make;\n    string model;\n    int year;\n    string fuelType;\n\npublic:\n    Vehicle(string mk, string md, int y, string fuel){\n        make = mk;\n        model = md;\n        year = y;\n        fuelType = fuel;\n    }\n\n    virtual int fuelEfficiency(){\n        return 0;\n    }\n\n    virtual int maxSpeed(){\n        return 0;\n    }\n\n    int distanceTraveled(int fuelUsed){\n        return fuelEfficiency() * fuelUsed;\n    }\n\n    void showDetails(){\n        cout << \"Make : \" << make << \" , Model : \" << model << \", Year : \" << year << \" , Fuel : \" << fuelType << \"\\n\";\n    }\n};\n\n\nclass Truck : public Vehicle{\n\n    public:\n        Truck(string mk, string md, int y, string fuel) : Vehicle(mk, md, y, fuel){\n        }\n\n        int fuelEfficiency(){\n            return 8;\n        }\n\n        int maxSpeed(){\n            return 120;\n        }\n    };\n\n\nclass Car : public Vehicle{\n\n    public:\n\n        Car(string mk, string md, int y, string fuel) : Vehicle(mk, md, y, fuel){\n        }\n\n        int fuelEfficiency(){\n            return 15;\n        }\n\n        int maxSpeed(){\n            return 180;\n        }\n\n    };\n\n\nclass Motorcycle : public Vehicle{\n\n    public:\n        Motorcycle(string mk, string md, int y, string fuel) : Vehicle(mk, md, y, fuel){\n        }\n\n        int fuelEfficiency(){\n            return 35;\n        }\n\n        int maxSpeed(){\n            return 140;\n        }\n};\n\n\nint main(){\n\n    Truck truck(\"Tata\", \"Prima\", 2022, \"Diesel\");\n    Car car(\"Honda\", \"City\", 2023, \"Petrol\");\n    Motorcycle bike(\"Yamaha\", \"R15\", 2024, \"Petrol\");\n\n    int fuelUsed;\n\n    cout << \"Enter fuel used : \";\n    cin >> fuelUsed;\n\n    cout << \"\\n Truck details:\\n\";\n    truck.showDetails();\n    cout << \"Fuel efficiency : \" << truck.fuelEfficiency() << \"\\n\";\n    cout << \"Distance traveled : \" << truck.distanceTraveled(fuelUsed) << \"\\n\";\n    cout << \"Max speed : \" << truck.maxSpeed() << \"\\n\";\n\n    cout << \"\\nCar details:\\n\";\n    car.showDetails();\n    cout << \"Fuel efficiency : \" << car.fuelEfficiency() << \"\\n\";\n    cout << \"Distance traveled : \" << car.distanceTraveled(fuelUsed) << \"\\n\";\n    cout << \"Max speed : \" << car.maxSpeed() << \"\\n\";\n\n    cout << \"\\nMotorcycle details:\\n\";\n    bike.showDetails();\n    cout << \"Fuel efficiency : \" << bike.fuelEfficiency() << \"\\n\";\n    cout << \"Distance traveled : \" << bike.distanceTraveled(fuelUsed) << \"\\n\";\n    cout << \"Max speed : \" << bike.maxSpeed() << \"\\n\";\n\n    return 0;\n}\n\n\n// PS E:\\dddddddd\\CPP_Que\\06-Inheritance_10> cd \"e:\\dddddddd\\CPP_Que\\06-Inheritance_10\\\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\\que9 }\n// Enter fuel used : 45\n\n//  Truck details:\n// Make : Tata , Model : Prima, Year : 2022 , Fuel : Diesel\n// Fuel efficiency : 8\n// Distance traveled : 360\n// Max speed : 120\n\n// Car details:\n// Make : Honda , Model : City, Year : 2023 , Fuel : Petrol\n// Fuel efficiency : 15\n// Distance traveled : 675\n// Max speed : 180",
        "output": "Motorcycle details:\nMake : Yamaha , Model : R15, Year : 2024 , Fuel : Petrol\nFuel efficiency : 35\nDistance traveled : 1575\nMax speed : 140"
      },
      {
        "id": 10,
        "filename": "que10.cpp",
        "title": "Write a C++ program that creates a class hierarchy for employees of a company. The base class should be Employee, with derived classes Manager, Developer, and Programmer. Each derived class should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.",
        "question": "Que 10 : \"Write a C++ program that creates a class hierarchy for employees of a company. \nThe base class should be Employee, with derived classes Manager, Developer, and Programmer.\nEach derived class should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating\nperformance reports, and managing projects.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Employee{\n\nprotected:\n    string name;\n    string address;\n    int salary;\n    string jobTitle;\n\n    public:\n\n        Employee(string n, string a, int s, string j){\n            name = n;\n            address = a;\n            salary = s;\n            jobTitle = j;\n        }\n\n        virtual int calculateBonus(){\n            return (salary*2)/100;\n        }\n\n        virtual void performanceReport(){\n            cout << name << \" has good performance \" <<endl;\n        }\n\n        virtual void manageProject(){\n            cout << name << \" is managing project \"<<endl;\n        }\n\n        void showBasicInfo(){\n            cout << \"Name: \" << name << \", Address :  \" << address << \", Salary: \" << salary << \", Job Title: \" << jobTitle <<endl;\n        }\n};\n\n\nclass Manager : public Employee{\n\npublic:\n    Manager(string n, string a, int s, string j) : Employee(n, a, s, j){\n    }\n \n    int calculateBonus(){\n        return (salary * 10) / 100;\n    }\n\n    void performanceReport(){\n        cout << name << \" manager perofrmance is good \"<<endl;\n    }\n\n    void manageProject(){\n        cout << name << \" manager is managing project \"<<endl;\n    }\n};\n\n\nclass Developer : public Employee{\n\npublic:\n    Developer(string n, string a, int s, string j) : Employee(n, a, s, j){\n    }\n\n    int calculateBonus(){\n        return (salary * 15) / 100;\n    }\n\n    void performanceReport(){\n        cout << name << \" is developer and good at work\"<<endl;\n    }\n\n    void manageProject(){\n        cout << name << \" is managing code\"<<endl;\n    }\n};\n\n\nclass Programmer : public Employee{\n\npublic:\n    Programmer(string n, string a, int s, string j) : Employee(n, a, s, j){\n    }\n\n    int calculateBonus(){\n        return (salary * 12) / 100;\n    }\n\n    void performanceReport(){\n        cout << name << \" is programmer doing good work\"<<endl;\n    }\n\n    void manageProject(){\n        cout << name << \" is managing programs\"<<endl;\n    }\n};\n\n\nint main(){\n\n    Manager manager(\"Rahul\", \"Delhi\", 80000, \"Manager\");\n    Developer developer(\"Aman\", \"Pune\", 60000, \"Developer\");\n    Programmer programmer(\"Neha\", \"Jaipur\", 50000, \"Programmer\");\n\n    cout << \"Manager :\\n\";\n    manager.showBasicInfo();\n    cout << \"Bonus : \" << manager.calculateBonus() << \"\\n\";\n    manager.performanceReport();\n    manager.manageProject();\n\n    cout << \"\\nDeveloper : \\n\";\n    developer.showBasicInfo();\n    cout << \"Bonus : \" << developer.calculateBonus() << \"\\n\";\n    developer.performanceReport();\n    developer.manageProject();\n\n    cout << \"\\nProgrammer : \\n\";\n    programmer.showBasicInfo();\n    cout << \"Bonus : \" << programmer.calculateBonus() << \"\\n\";\n    programmer.performanceReport();\n    programmer.manageProject();\n\n    return 0;\n}\n\n\n// PS E:\\dddddddd\\CPP_Que> cd \"e:\\dddddddd\\CPP_Que\\06-Inheritance_10\\\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\\que10 }\n// Manager :\n// Name: Rahul, Address :  Delhi, Salary: 80000, Job Title: Manager\n// Bonus : 8000\n// Rahul manager perofrmance is good\n// Rahul manager is managing project\n\n// Developer :\n// Name: Aman, Address :  Pune, Salary: 60000, Job Title: Developer\n// Bonus : 9000\n// Aman is developer and good at work\n// Aman is managing code",
        "output": "Programmer :\nName: Neha, Address :  Jaipur, Salary: 50000, Job Title: Programmer\nBonus : 6000\nNeha is programmer doing good work\nNeha is managing programs"
      }
    ]
  },
  {
    "id": 7,
    "slug": "data-conversion",
    "title": "Data Conversion",
    "subtitle": "16 Problems",
    "description": "Curated C++ practice problems focused on data conversion concepts and patterns.",
    "questions": [
      {
        "id": 1,
        "filename": "que1.cpp",
        "title": "C++ Program to convert String to int",
        "question": "Que 1 : \"C++ Program to convert String to int\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n    int sign = 1;\n    int index = 0;\n    int number = 0;\n\n    cout << \"Enter numeric string: \";\n    cin >> text;\n\n    if (text.length() == 0){\n        cout << \"Invalid input \\n\";\n        return 0;\n    }\n\n    if (text[0] == '-'){\n        sign = -1;\n        index = 1;\n        if (index == (int)text.length()){\n        cout << \"Invalid input \\n\";\n        return 0;\n    }\n    }\n\n    for (int i = index; i < (int)text.length(); i++){\n        if (text[i] < '0' || text[i] > '9'){\n            cout << \"Invalid input\\n\";\n            return 0;\n        }\n\n        number = number * 10 + (text[i] - '0');\n    }\n\n    number = number * sign;\n\n    cout << \"Converted int value : \" << number ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\\que1 }\nEnter numeric string: 12243\nConverted int value : 12243\nPS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\\que1 }\nEnter numeric string: df445\nInvalid input"
      },
      {
        "id": 2,
        "filename": "que2.cpp",
        "title": "C++ Program to convert int to String",
        "question": "Que 2 : \"C++ Program to convert int to String\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nstring tostr(int number){\n\n    if (number == 0){\n        return \"0\";\n    }\n\n    int sign = 1;\n    if (number < 0){\n        sign = -1;\n        number = -number;\n    }\n\n    //1334\n\n    // 4 3 3 1\n\n    string reversed = \"\";\n    while (number > 0){\n        int digit = number % 10;\n        reversed += (char)('0' + digit);\n        number = number / 10;\n    }\n\n    string result = \"\";\n    if (sign == -1){\n        result += '-';\n    }\n\n    for (int i = (int)reversed.length() - 1; i >= 0; i--){\n        result += reversed[i];\n    }\n\n    return result;\n}\n\n\nint main(){\n\n    int number;\n\n    cout << \"Enter integer value : \";\n    cin >> number;\n\n    string text = tostr(number);\n\n    cout << \"Converted string value : \" << text ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\\que2 }\nEnter integer value : 34343\nConverted string value : 34343"
      },
      {
        "id": 3,
        "filename": "que3.cpp",
        "title": "C++ Program to convert String to long",
        "question": "Que 3 : \"C++ Program to convert String to long\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n    int sign = 1;\n    int index = 0;\n    long value = 0;\n\n    cout << \"Enter numeric string: \";\n    cin >> text;\n\n    if (text.length() == 0){\n        cout << \"Invalid input\\n\";\n        return 0;\n    }\n\n    if (text[0] == '-'){\n        sign = -1;\n        index = 1;\n        \n            if (index == (int)text.length()){\n                cout << \"Invalid input\\n\";\n                return 0;\n            }\n    }\n\n    for (int i = index; i < (int)text.length(); i++){\n        if (text[i] < '0' || text[i] > '9'){\n            cout << \"Invalid input\\n\";\n            return 0;\n        }\n\n        value = value * 10 + (text[i] - '0');\n    }\n\n    value = value * sign;\n\n    cout << \"Converted long value : \" << value ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\\que3 }\nEnter numeric string: 34343\nConverted long value : 34343"
      },
      {
        "id": 4,
        "filename": "que4.cpp",
        "title": "C++ Program to convert long to String",
        "question": "Que 4 : \"C++ Program to convert long to String\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nstring toText(long number){\n\n    if (number == 0){\n        return \"0\";\n    }\n\n    int sign = 1;\n    if (number < 0){\n        sign = -1;\n        number = -number;\n    }\n\n    string reversed = \"\";\n    while (number > 0){\n        reversed += (char)('0' + (number % 10));\n        number = number / 10;\n    }\n\n    string result = \"\";\n    if (sign == -1){\n        result += '-';\n    }\n\n    for (int i = (int)reversed.length() - 1; i >= 0; i--){\n        result += reversed[i];\n    }\n\n    return result;\n}\n\n\nint main(){\n\n    int value;\n\n    cout << \"Enter long value : \";\n    cin >> value;\n\n    string text = toText(value);\n\n    cout << \"Converted string value: \" << text ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\\que4 }\nEnter long value : 22222\nConverted string value: 22222"
      },
      {
        "id": 5,
        "filename": "que5.cpp",
        "title": "C++ Program to convert String to float",
        "question": "Que 5 : \"C++ Program to convert String to float\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n    int sign = 1;\n    int index = 0;\n    int integerPart = 0;\n    int fractionPart = 0;\n    int divisor = 1;\n    int hasDot = 0;\n\n    cout << \"Enter float in string form: \";\n    cin >> text;\n\n    if (text.length() == 0){\n        cout << \"Invalid input\\n\";\n        return 0;\n    }\n\n    if (text[0] == '-'){\n        sign = -1;\n        index = 1;\n    }\n\n    for (int i = index; i < (int)text.length(); i++){\n        if (text[i] == '.'){\n            if (hasDot == 1){\n                cout << \"Invalid input\\n\";\n                return 0;\n            }\n\n            hasDot = 1;\n            continue;\n        }\n\n        if (text[i] < '0' || text[i] > '9'){\n            cout << \"Invalid input\\n\";\n            return 0;\n        }\n\n        if (hasDot == 0){\n            integerPart = integerPart * 10 + (text[i] - '0');\n        }\n\n        else{\n            fractionPart = fractionPart * 10 + (text[i] - '0');\n            divisor = divisor * 10;\n        }\n    }\n\n    float value = (float)integerPart + (float)fractionPart / divisor;\n    value = value * sign;\n\n    cout << \"Converted float value: \" << value ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\\que5 }\nEnter float in string form: 3232.43\nConverted float value: 3232.43"
      },
      {
        "id": 6,
        "filename": "que6.cpp",
        "title": "C++ Program to convert float to String",
        "question": "",
        "code": "",
        "output": ""
      },
      {
        "id": 7,
        "filename": "que7.cpp",
        "title": "C++ Program to convert String to double",
        "question": "Que 7 : \"C++ Program to convert String to double\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    string text;\n    int sign = 1;\n    int index = 0;\n    int integerPart = 0;\n    long fractionPart = 0;\n    int divisor = 1;\n    int hasDot = 0;\n\n    cout << \"Enter double in string form: \";\n    cin >> text;\n\n    if (text.length() == 0){\n        cout << \"Invalid input\\n\";\n        return 0;\n    }\n\n    if (text[0] == '-'){\n        sign = -1;\n        index = 1;\n    }\n\n    for (int i = index; i < (int)text.length(); i++){\n        if (text[i] == '.'){\n            if (hasDot == 1){\n                cout << \"Invalid input\\n\";\n                return 0;\n            }\n\n            hasDot = 1;\n            continue;\n        }\n\n        if (text[i] < '0' || text[i] > '9'){\n            cout << \"Invalid input\\n\";\n            return 0;\n        }\n\n        if (hasDot == 0){\n            integerPart = integerPart * 10 + (text[i] - '0');\n        }\n\n        else{\n            fractionPart = fractionPart * 10 + (text[i] - '0');\n            divisor = divisor * 10;\n        }\n    }\n\n    double value = (double)integerPart + (double)fractionPart / divisor;\n    value = value * sign;\n\n    cout << \"Converted double value (float mode): \" << value ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\\que7 }\nEnter double in string form: 4.55\nConverted double value (float mode): 4.55"
      },
      {
        "id": 8,
        "filename": "que8.cpp",
        "title": "C++ Program to convert double to String",
        "question": "Que 8 : \"C++ Program to convert double to String\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nbool isValidDecimal(string text){\n\n    if (text.length() == 0){\n        return false;\n    }\n\n    int index = 0;\n    int hasDot = 0;\n\n    if (text[0] == '-'){\n        index = 1;\n    }\n\n    if (index == (int)text.length()){\n        return false;\n    }\n\n    for (int i = index; i < (int)text.length(); i++){\n        if (text[i] == '.'){\n            if (hasDot == 1){\n                return false;\n            }\n\n            hasDot = 1;\n            continue;\n        }\n\n        if (text[i] < '0' || text[i] > '9'){\n            return false;\n        }\n    }\n\n    return true;\n}\n\n\nint main(){\n\n    string value;\n\n    cout << \"Enter double value : \";\n    cin >> value;\n\n    if (!isValidDecimal(value)){\n        cout << \"Invalid input\\n\";\n        return 0;\n    }\n\n    cout << \"Converted string value: \" << value ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\\que8 }\nEnter double value : 3.333333333333333333333333333333333333333333\nConverted string value: 3.333333333333333333333333333333333333333333"
      },
      {
        "id": 9,
        "filename": "que9.cpp",
        "title": "C++ Program to convert char to int",
        "question": "Que 9 : \"C++ Program to convert char to int\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    char ch;\n\n    cout << \"Enter a character: \";\n    cin >> ch;\n\n    int value = (int)ch;\n\n    cout << \"Converted int value: \" << value ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\\que9 }\nEnter a character: T\nConverted int value: 84"
      },
      {
        "id": 10,
        "filename": "que10.cpp",
        "title": "C++ Program to convert int to char",
        "question": "Que 10 : \"C++ Program to convert int to char\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int value;\n\n    cout << \"Enter integer value (0 to 127) :\";\n    cin >> value;\n\n    if (value < 0 || value > 127){\n        cout << \"Value out of range\";\n        return 0;\n    }\n\n    char ch = (char)value;\n\n    cout << \"Converted char value: \" << ch ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\\que10 }\nEnter integer value (0 to 127) :65\nConverted char value: A"
      },
      {
        "id": 11,
        "filename": "que11.cpp",
        "title": "C++ Program to convert Binary to Decimal",
        "question": "Que 11 : \"C++ Program to convert Binary to Decimal\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int binary;\n    int decimal = 0;\n    int place = 1;\n\n    cout << \"Enter binary number: \";\n    cin >> binary;\n\n    while (binary > 0){\n        int digit = binary % 10;\n\n        if (digit != 0 && digit != 1){\n            cout << \"Invalid binary number\\n\";\n            return 0;\n        }\n\n        decimal += digit * place;\n        place = place * 2;\n        binary = binary / 10;\n    }\n\n    cout << \"Decimal value: \" << decimal ;\n    return 0;\n}",
        "output": "S E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\\que11 }\nEnter binary number: 1010001\nDecimal value: 81"
      },
      {
        "id": 12,
        "filename": "que12.cpp",
        "title": "C++ Program to convert Decimal to Binary",
        "question": "Que 12 : \"C++ Program to convert Decimal to Binary\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int decimal;\n    int binary[64];\n    int index = 0;\n\n    cout << \"Enter decimal number: \";\n    cin >> decimal;\n\n    if (decimal == 0){\n        cout << \"Binary value: 0 \";\n        return 0;\n    }\n\n    while (decimal > 0){\n        binary[index] = decimal % 2;\n        decimal = decimal / 2;\n        index++;\n    }\n\n    cout << \"Binary value : \";\n    for (int i = index - 1; i >= 0; i--){\n        cout << binary[i];\n    }\n\n    return 0;\n}",
        "output": "S E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\\que11 }\nEnter binary number: 1010001\nDecimal value: 81"
      },
      {
        "id": 13,
        "filename": "que13.cpp",
        "title": "C++ Program to convert Hex to Decimal",
        "question": "Que 13 : \"C++ Program to convert Hex to Decimal\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint hexValue(char ch){\n\n    if (ch >= '0' && ch <= '9'){\n        return ch - '0';\n    }\n\n    if (ch >= 'A' && ch <= 'F'){\n        return 10 + (ch - 'A');\n    }\n\n    if (ch >= 'a' && ch <= 'f'){\n        return 10 + (ch - 'a');\n    }\n\n    return -1;\n}\n\n\nint main(){\n\n    string hex;\n    int decimal = 0;\n\n    cout << \"Enter hex value : \";\n    cin >> hex;\n\n    for (int i = 0; i < (int)hex.length(); i++){\n        int value = hexValue(hex[i]);\n\n        if (value == -1){\n            cout << \"Invalid hex value\";\n            return 0;\n        }\n\n        decimal = decimal * 16 + value;\n    }\n\n    cout << \"Decimal value : \" << decimal ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que13.cpp -o que13 } ; if ($?) { .\\que13 }\nEnter hex value : 323ABD\nDecimal value : 3291837"
      },
      {
        "id": 14,
        "filename": "que14.cpp",
        "title": "C++ Program to convert Decimal to Hex",
        "question": "Que 14 : \"C++ Program to convert Decimal to Hex\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nint main(){\n\n    int decimal;\n    string hex = \"\";\n\n    cout << \"Enter decimal number: \";\n    cin >> decimal;\n\n    if (decimal == 0){\n        cout << \"Hex value: 0 \";\n        return 0;\n    }\n\n    while (decimal > 0){\n        int rem = decimal % 16;\n\n        if (rem < 10){\n            hex += (char)('0' + rem);\n        }\n\n        else{\n            hex += (char)('A' + (rem - 10));\n        }\n\n        decimal = decimal / 16;\n    }\n\n    string result = \"\";\n    for (int i = (int)hex.length() - 1; i >= 0; i--){\n        result += hex[i];\n    }\n\n    cout << \"Hex value : \" << result ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que14.cpp -o que14 } ; if ($?) { .\\que14 }\nEnter decimal number: 3291837\nHex value : 323ABD"
      },
      {
        "id": 15,
        "filename": "que15.cpp",
        "title": "C++ Program to convert Octal to Decimal",
        "question": "Que 15 : \"C++ Program to convert Octal to Decimal\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int octal;\n    int decimal = 0;\n    int place = 1;\n\n    cout << \"Enter octal number: \";\n    cin >> octal;\n\n    while (octal > 0){\n        int digit = octal % 10;\n\n        if (digit < 0 || digit > 7){\n            cout << \"Invalid octal number \";\n            return 0;\n        }\n\n        decimal += digit * place;\n        place = place * 8;\n        octal = octal / 10;\n    }\n\n    cout << \"Decimal valuev: \" << decimal ;\n    return 0;\n}",
        "output": "S E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que15.cpp -o que15 } ; if ($?) { .\\que15 }\nEnter octal number: 23477\nDecimal valuev: 10047"
      },
      {
        "id": 16,
        "filename": "que16.cpp",
        "title": "C++ Program to convert Decimal to Octal",
        "question": "Que 16 : \"C++ Program to convert Decimal to Octal\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint main(){\n\n    int decimal;\n    int octal[64];\n    int index = 0;\n\n    cout << \"Enter decimal number: \";\n    cin >> decimal;\n\n    if (decimal == 0){\n        cout << \"Octal value: 0 \";\n        return 0;\n    }\n\n    while (decimal > 0){\n        octal[index] = decimal % 8;\n        decimal = decimal / 8;\n        index++;\n    }\n\n    cout << \"Octal value: \";\n    for (int i = index - 1; i >= 0; i--){\n        cout << octal[i];\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\07-Data_Conversion_16\\\" ; if ($?) { g++ que16.cpp -o que16 } ; if ($?) { .\\que16 }\nEnter decimal number: 10047\nOctal value: 23477"
      }
    ]
  },
  {
    "id": 8,
    "slug": "object-oriented-programming",
    "title": "Object Oriented Programming",
    "subtitle": "31 Problems",
    "description": "Curated C++ practice problems focused on object oriented programming concepts and patterns.",
    "questions": [
      {
        "id": 1,
        "filename": "que1.cpp",
        "title": "Write a C++ program to create a class called \"Person\" with a name and age attribute. Create two instances and print their details.",
        "question": "Que 1 : \"Write a C++ program to create a class called \\\"Person\\\" with a name and age attribute. Create two instances and print their details.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Person{\n\n    private:\n\n        string name;\n        int age;\n\n    public:\n\n        Person(string n, int a){\n            name = n;\n            age = a;\n        }\n\n        void printDetails(){\n            cout << \"Name: \" << name << \", Age: \" << age<<endl;\n\n        }\n    };\n\n\nint main(){\n\n    Person p1(\"Aman\", 21);\n    Person p2(\"Riya\", 23);\n\n    p1.printDetails();\n    p2.printDetails();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\07-Data_Conversion_16> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63\\\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\\que1 }\nName: Aman, Age: 21\nName: Riya, Age: 23"
      },
      {
        "id": 2,
        "filename": "que2.cpp",
        "title": "Write a C++ program to create a class called \"Dog\" with name and breed. Modify using setters and print updated values.",
        "question": "Que 2 : \"Write a C++ program to create a class called \\\"Dog\\\" with name and breed. Modify using setters and print updated values.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Dog{\n\nprivate:\n    string name;\n    string breed;\n\npublic:\n    Dog(string n, string b){\n        name = n;\n        breed = b;\n    }\n\n    void setName(string n){\n        name = n;\n    }\n\n    void setBreed(string b){\n        breed = b;\n    }\n\n    void printDetails(){\n        cout << \"Dog Name: \" << name << \", Breed: \" << breed << endl;\n    }\n};\n\n\nint main(){\n\n    Dog d(\"Tommy\", \"A\");\n    d.printDetails();\n\n    d.setName(\"Bruno\");\n    d.setBreed(\"B\");\n\n    d.printDetails();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63\\\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\\que2 }\nDog Name: Tommy, Breed: A\nDog Name: Bruno, Breed: B"
      },
      {
        "id": 3,
        "filename": "que3.cpp",
        "title": "Write a C++ program to create a class called \"Rectangle\" and calculate area and perimeter.",
        "question": "Que 3 : \"Write a C++ program to create a class called \\\"Rectangle\\\" and calculate area and perimeter.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Rectangle{\n\n    private:\n        int length;\n        int width;\n\n    public:\n        Rectangle(int l, int w){\n            length = l;\n            width = w;\n        }\n\n        int area(){\n            return length * width;\n        }\n\n        int perimeter(){\n            return 2 * (length + width);\n        }\n};\n\n\nint main(){\n\n    int length;\n    int width;\n\n    cout << \"Enter length and width : \";\n    cin >> length >> width;\n\n    Rectangle r(length, width);\n\n    cout << \"Area: \" << r.area();\n    cout << \"  Perimeter: \" << r.perimeter() ;\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63\\\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\\que3 }\nEnter length and width : 3\n4\nArea: 12  Perimeter: 14"
      },
      {
        "id": 4,
        "filename": "que4.cpp",
        "title": "Write a C++ program to create a class called \"Circle\" and calculate area and circumference.",
        "question": "Que 4 : \"Write a C++ program to create a class called \\\"Circle\\\" and calculate area and circumference.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Circle{\n\n    private:\n        int radius;\n\n    public:\n        Circle(int r){\n            radius = r;\n        }\n\n        int area(){\n            return (22 * radius * radius)/7;\n        }\n\n        int circumference(){\n            return (2 * 22 * radius) / 7;\n        }\n};\n\n\nint main(){\n\n    int radius;\n\n    cout << \"Enter radius: \";\n    cin >> radius;\n\n    Circle c(radius);\n\n    cout << \"Area: \" << c.area() << endl;\n    cout << \"Circumference: \" << c.circumference() ;\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63\\\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\\que4 }\nEnter radius: 7\nArea: 154\nCircumference: 44"
      },
      {
        "id": 5,
        "filename": "que5.cpp",
        "title": "Write a C++ program to create a class called \"Book\" with methods to manage a collection.",
        "question": "Que 5 : \"Write a C++ program to create a class called \\\"Book\\\" with methods to manage a collection.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Book{\n\nprivate:\n    string books[100];\n    int count;\n\npublic:\n    Book(){\n        count = 0;\n    }\n\n    void addBook(string name){\n        if (count < 100){\n            books[count] = name;\n            count++;\n        }\n    }\n\n    void removeBook(string name){\n        for (int i = 0; i < count; i++){\n            if (books[i] == name){\n                for (int j = i; j < count - 1; j++){\n                    books[j] = books[j + 1];\n                }\n                count--;\n                break;\n            }\n        }\n    }\n\n    void showBooks(){\n        cout << \"Book Collection:\\n\";\n        for (int i = 0; i < count; i++){\n            cout << books[i] << \"\\n\";\n        }\n    }\n};\n\n\nint main(){\n\n    Book collection;\n\n    collection.addBook(\"C\");\n    collection.addBook(\"CPP\");\n    collection.addBook(\"AI\");\n    collection.addBook(\"CO\");\n    collection.addBook(\"CH\");\n\n    collection.showBooks();\n\n    collection.removeBook(\"AI\");\n\n    cout << \"\\nAfter removing one book:\\n\";\n    collection.showBooks();\n\n    return 0;\n}\n\n\n// PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63\\\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\\que5 }\n// Book Collection:\n// C\n// CPP\n// AI\n// CO\n// CH",
        "output": "After removing one book:\nBook Collection:\nC\nCPP\nCO\nCH"
      },
      {
        "id": 6,
        "filename": "que6.cpp",
        "title": "Write a C++ program to create a class called \"Employee\" with salary calculation methods.",
        "question": "Que 6 : \"Write a C++ program to create a class called \\\"Employee\\\" with salary calculation methods.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Employee{\n\nprivate:\n    int basicSalary;\n    int bonus;\n\npublic:\n    Employee(int basic, int b){\n        basicSalary = basic;\n        bonus = b;\n    }\n\n    int calculateSalary(){\n        return basicSalary + bonus;\n    }\n};\n\n\nint main(){\n\n\n    Employee emp(100000, 100);\n\n    cout << \"Total salary: \" << emp.calculateSalary() ;\n    return 0;\n}",
        "output": "S E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63\\\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?) { .\\que6 }\nTotal salary: 100100"
      },
      {
        "id": 7,
        "filename": "que7.cpp",
        "title": "Write a C++ program to create a \"Bank\" and \"Account\" class for transactions.",
        "question": "Que 7 : \"Write a C++ program to create a \\\"Bank\\\" and \\\"Account\\\" class for transactions.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Account{\n\nprivate:\n    int accountNumber;\n    int balance;\n\npublic:\n    Account(int accNo, int bal){\n        accountNumber = accNo;\n        balance = bal;\n    }\n\n    void deposit(int amount){\n        balance += amount;\n    }\n\n    void withdraw(int amount){\n        if (amount > balance){\n            cout << \"Insufficient balance\\n\";\n        }\n\n        else{\n            balance -= amount;\n            cout << \"Withdrawal successful\\n\";\n        }\n    }\n\n    int getBalance(){\n        return balance;\n    }\n\n    int getAccountNumber(){\n        return accountNumber;\n    }\n};\n\n\nclass Bank{\n\npublic:\n    void showAccount(Account acc){\n        cout << \"Account No: \" << acc.getAccountNumber() << \"\\n\";\n        cout << \"Balance: \" << acc.getBalance() ;\n    }\n};\n\n\nint main(){\n\n    Account acc(1001, 5000);\n    Bank bank;\n\n    bank.showAccount(acc);\n\n    acc.deposit(1500);\n    acc.withdraw(2000);\n\n    cout << \"\\nAfter transactions:\\n\";\n    bank.showAccount(acc);\n\n    return 0;\n}\n\n\n// PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63\\\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\\que7 }\n// Account No: 1001\n// Balance: 5000Withdrawal successful",
        "output": "After transactions:\nAccount No: 1001\nBalance: 4500"
      },
      {
        "id": 8,
        "filename": "que8.cpp",
        "title": "Write a C++ program to create a class called \"TrafficLight\" with color logic.",
        "question": "Que 8 : \"Write a C++ program to create a class called TrafficLight with color logic.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass TrafficLight{\n\n    private:\n        string color;\n\n    public:\n        TrafficLight(string c){\n            color = c;\n        }\n\n        void changeColor(string c){\n            color = c;\n        }\n\n        void showAction(){\n            if (color == \"Red\"){\n                cout << \"Stop\\n\";\n            }\n\n            else if (color == \"Yellow\"){\n                cout << \"Get Ready\\n\";\n            }\n\n            else if (color == \"Green\"){\n                cout << \"Go\\n\";\n            }\n\n            else{\n                cout << \"Invalid color\\n\";\n            }\n        }\n};\n\n\nint main(){\n\n    TrafficLight light(\"Red\");\n\n    light.showAction();\n    light.changeColor(\"Green\");\n    light.showAction();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63\\\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\\que8 }\nStop\nGo"
      },
      {
        "id": 9,
        "filename": "que9.cpp",
        "title": "Write a C++ program to create an \"Employee\" class with years of service calculation.",
        "question": "Que 9 : \"Write a C++ program to create an \\\"Employee\\\" class with years of service calculation.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Employee{\n\nprivate:\n    int joiningYear;\n    int currentYear;\n\npublic:\n    Employee(int join, int current){\n        joiningYear = join;\n        currentYear = current;\n    }\n\n    int yearsOfService(){\n        return currentYear - joiningYear;\n    }\n};\n\n\nint main(){\n\n    int joiningYear;\n    int currentYear;\n\n    cout << \"Enter joining year and current year : \";\n    cin >> joiningYear >> currentYear;\n\n    if (currentYear < joiningYear){\n        cout << \"Invalid years\";\n        return 0;\n    }\n\n    Employee emp(joiningYear, currentYear);\n\n    cout << \"Years of service: \" << emp.yearsOfService() ;\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63\\\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\\que9 }\nEnter joining year and current year : 23\n44\nYears of service: 21"
      },
      {
        "id": 10,
        "filename": "que10.cpp",
        "title": "Write a C++ program to create a \"Student\" class with course management.",
        "question": "Que 10 : \"Write a C++ program to create a \\\"Student\\\" class with course management.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Student{\n\nprivate:\n    string name;\n    string courses[20];\n    int count;\n\npublic:\n    Student(string n){\n        name = n;\n        count = 0;\n    }\n\n    void addCourse(string course){\n        if (count < 20){\n            courses[count] = course;\n            count++;\n        }\n    }\n\n    void dropCourse(string course){\n        for (int i = 0; i < count; i++){\n            if (courses[i] == course){\n                for (int j = i; j < count - 1; j++){\n                    courses[j] = courses[j + 1];\n                }\n\n                count--;\n                break;\n            }\n        }\n    }\n\n    void showCourses(){\n        cout << \"Courses of \" << name << \":\\n\";\n        for (int i = 0; i < count; i++){\n            cout << courses[i] << \"\\n\";\n        }\n    }\n};\n\n\nint main(){\n\n    Student s(\"Rahul\");\n\n    s.addCourse(\"AI\");\n    s.addCourse(\"CO\");\n    s.addCourse(\"C++\");\n\n    s.showCourses();\n\n    s.dropCourse(\"CO\");\n\n    cout << \"\\nAfter dropping one course:\\n\";\n    s.showCourses();\n\n    return 0;\n}\n\n\n// PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63\\\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\\que10 }\n// Courses of Rahul:\n// AI\n// CO\n// C++",
        "output": "After dropping one course:\nCourses of Rahul:\nAI\nC++"
      },
      {
        "id": 11,
        "filename": "que11.cpp",
        "title": "Write a C++ program to create a \"Library\" class to manage books.",
        "question": "Que 11 : \"Write a C++ program to create a \\\"Library\\\" class to manage books.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Library{\n\nprivate:\n    string books[100];\n    int count;\n\npublic:\n    Library(){\n        count = 0;\n    }\n\n    void addBook(string book){\n        if (count < 100){\n            books[count] = book;\n            count++;\n        }\n    }\n\n    void removeBook(string book){\n        for (int i = 0; i < count; i++){\n            if (books[i] == book){\n                for (int j = i; j < count - 1; j++){\n                    books[j] = books[j + 1];\n                }\n\n                count--;\n                break;\n            }\n        }\n    }\n\n    void showBooks(){\n        cout << \"Books in library:\\n\";\n        for (int i = 0; i < count; i++){\n            cout << books[i] << \"\\n\";\n        }\n    }\n};\n\n\nint main(){\n\n    Library lib;\n\n    lib.addBook(\"AI\");\n    lib.addBook(\"CPP\");\n    lib.addBook(\"co\");\n\n    lib.showBooks();\n\n    lib.removeBook(\"AI\");\n\n    cout << \"\\nAfter removing one book:\\n\";\n    lib.showBooks();\n\n    return 0;\n}\n\n\n// PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63\\\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\\que11 }\n// Books in library:\n// AI\n// CPP\n// co",
        "output": "After removing one book:\nBooks in library:\nCPP\nco"
      },
      {
        "id": 12,
        "filename": "que12.cpp",
        "title": "Write a C++ program to create an \"Airplane\" class with flight tracking.",
        "question": "Que 12 : \"Write a C++ program to create an Airplane class with flight tracking.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Airplane{\n\nprivate:\n    string flightNo;\n    string status;\n\npublic:\n    Airplane(string no, string st){\n        flightNo = no;\n        status = st;\n    }\n\n    void updateStatus(string st){\n        status = st;\n    }\n\n    void printStatus(){\n        cout << \"Flight \" << flightNo << \" status: \" << status << \"\\n\";\n    }\n};\n\n\nint main(){\n\n    Airplane plane(\"AI202\", \"On Time\");\n\n    plane.printStatus();\n    plane.updateStatus(\"Delayed\");\n    plane.printStatus();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_63> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que12.cpp -o que12 } ; if ($?) { .\\que12 }\nFlight AI202 status: On Time\nFlight AI202 status: Delayed"
      },
      {
        "id": 13,
        "filename": "que13.cpp",
        "title": "Write a C++ program to create an \"Inventory\" class for product tracking.",
        "question": "Que 13 : \"Write a C++ program to create Inventory class for product tracking.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Inventory{\n\nprivate:\n    string productName;\n    int quantity;\n\npublic:\n    Inventory(string name, int qty){\n        productName = name;\n        quantity = qty;\n    }\n\n    void addStock(int qty){\n        quantity += qty;\n    }\n\n    void sellStock(int qty){\n        if (qty > quantity){\n            cout << \"Not enough stock\\n\";\n        }\n\n        else{\n            quantity -= qty;\n        }\n    }\n\n    void show(){\n        cout << \"Product: \" << productName << \", Quantity: \" << quantity << \"\\n\";\n    }\n};\n\n\nint main(){\n\n    Inventory inv(\"Laptop\", 10);\n\n    inv.show();\n    inv.addStock(5);\n    inv.sellStock(8);\n    inv.show();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que13.cpp -o que13 } ; if ($?) { .\\que13 }\nProduct: Laptop, Quantity: 10\nProduct: Laptop, Quantity: 7"
      },
      {
        "id": 14,
        "filename": "que14.cpp",
        "title": "Write a C++ program to create a \"School\" class with students and teachers.",
        "question": "Que 14 : \"Write a C++ program to create a School class with students and teachers.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass School{\n\nprivate:\n    string students[100];\n    string teachers[50];\n    int studentCount;\n    int teacherCount;\n\npublic:\n    School(){\n        studentCount = 0;\n        teacherCount = 0;\n    }\n\n    void addStudent(string name){\n        if (studentCount < 100){\n            students[studentCount] = name;\n            studentCount++;\n        }\n    }\n\n    void addTeacher(string name){\n        if (teacherCount < 50){\n            teachers[teacherCount] = name;\n            teacherCount++;\n        }\n    }\n\n    void showDetails(){\n        cout << \"Students:\\n\";\n        for (int i = 0; i < studentCount; i++){\n            cout << students[i] << \"\\n\";\n        }\n\n        cout << \"Teachers:\\n\";\n        for (int i = 0; i < teacherCount; i++){\n            cout << teachers[i] << \"\\n\";\n        }\n    }\n};\n\n\nint main(){\n\n    School school;\n\n    school.addStudent(\"Amit\");\n    school.addStudent(\"Priya\");\n\n    school.addTeacher(\"Teacher 1\");\n    school.addTeacher(\"Teacher 2\");\n\n    school.showDetails();\n\n    return 0;\n}",
        "output": "S E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que14.cpp -o que14 } ; if ($?) { .\\que14 }\nStudents:\nAmit\nPriya\nTeachers:\nTeacher 1\nTeacher 2"
      },
      {
        "id": 15,
        "filename": "que15.cpp",
        "title": "Write a C++ program to create a \"MusicLibrary\" class.",
        "question": "Que 15 : \"Write a C++ program to create a MusicLibrary class.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass MusicLibrary{\n\nprivate:\n    string songs[100];\n    int count;\n\npublic:\n    MusicLibrary(){\n        count = 0;\n    }\n\n    void addSong(string song){\n        if (count < 100){\n            songs[count] = song;\n            count++;\n        }\n    }\n\n    void removeSong(string song){\n        for (int i = 0; i < count; i++){\n            if (songs[i] == song){\n                for (int j = i; j < count - 1; j++){\n                    songs[j] = songs[j + 1];\n                }\n\n                count--;\n                break;\n            }\n        }\n    }\n\n    void showSongs(){\n        cout << \"Songs in library:\\n\";\n        for (int i = 0; i < count; i++){\n            cout << songs[i] << \"\\n\";\n        }\n    }\n};\n\n\nint main(){\n\n    MusicLibrary m;\n\n    m.addSong(\"Song 1\");\n    m.addSong(\"Song 2\");\n    m.addSong(\"Song 3\");\n\n    m.showSongs();\n\n    m.removeSong(\"Song 1\");\n\n    cout << \"\\nAfter removing one song:\\n\";\n    m.showSongs();\n\n    return 0;\n}\n\n\n// PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que15.cpp -o que15 } ; if ($?) { .\\que15 }\n// Songs in library:\n// Song 1\n// Song 2\n// Song 3",
        "output": "After removing one song:\nSongs in library:\nSong 2\nSong 3"
      },
      {
        "id": 16,
        "filename": "que16.cpp",
        "title": "Write a C++ program using abstract \"Shape\" class and derived classes.",
        "question": "Que 16 : \"Write a C++ program using abstract Shape class and derived classes.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Shape{\n\n    public:\n        virtual int area() = 0;\n    };\n\n\n    class Rectangle : public Shape{\n\n    private:\n        int length;\n        int width;\n\n    public:\n        Rectangle(int l, int w){\n            length = l;\n            width = w;\n        }\n\n        int area(){\n            return length * width;\n        }\n};\n\n\nclass Circle : public Shape{\n\nprivate:\n    int radius;\n\npublic:\n    Circle(int r){\n        radius = r;\n    }\n\n    int area(){\n        return (22 * radius * radius) / 7;\n    }\n};\n\n\nint main(){\n\n    Rectangle rect(10, 5);\n    Circle cir(7);\n\n    cout << \"Rectangle area: \" << rect.area() << \"\\n\";\n    cout << \"Circle area: \" << cir.area() ;\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que16.cpp -o que16 } ; if ($?) { .\\que16 }\nRectangle area: 50\nCircle area: 154"
      },
      {
        "id": 17,
        "filename": "que17.cpp",
        "title": "Write a C++ program to create a \"Movie\" class with reviews.",
        "question": "Que 17 : \"Write a C++ program to create a Movieclass with reviews.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Movie{\n\nprivate:\n    string title;\n    string reviews[50];\n    int count;\n\npublic:\n    Movie(string t){\n        title = t;\n        count = 0;\n    }\n\n    void addReview(string review){\n        if (count < 50){\n            reviews[count] = review;\n            count++;\n        }\n    }\n\n    void showReviews(){\n        cout << \"Movie: \" << title << \"\\n\";\n        cout << \"Reviews:\\n\";\n        for (int i = 0; i < count; i++){\n            cout << reviews[i] << \"\\n\";\n        }\n    }\n};\n\n\nint main(){\n\n    Movie m(\"Interstellar\");\n\n    m.addReview(\"Good\");\n    m.addReview(\"Bad\");\n    m.addReview(\"Mid\");\n\n    m.showReviews();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que17.cpp -o que17 } ; if ($?) { .\\que17 }\nMovie: Interstellar\nReviews:\nGood\nBad\nMid"
      },
      {
        "id": 18,
        "filename": "que18.cpp",
        "title": "Write a C++ program to create a \"Restaurant\" class with ratings.",
        "question": "",
        "code": "",
        "output": ""
      },
      {
        "id": 19,
        "filename": "que19.cpp",
        "title": "Write a C++ program for booking flights and hotels.",
        "question": "Que 19 : \"Write a C++ program for booking flights and hotels.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass BookingSystem{\n\nprivate:\n    string customerName;\n    string flight;\n    string hotel;\n\npublic:\n    BookingSystem(string name){\n        customerName = name;\n        flight = \"Not Booked\";\n        hotel = \"Not Booked\";\n    }\n\n    void bookFlight(string flightName){\n        flight = flightName;\n    }\n\n    void bookHotel(string hotelName){\n        hotel = hotelName;\n    }\n\n    void showBooking(){\n        cout << \"Customer: \" << customerName << \"\\n\";\n        cout << \"Flight: \" << flight << \"\\n\";\n        cout << \"Hotel: \" << hotel << \"\\n\";\n    }\n};\n\n\nint main(){\n\n    BookingSystem b(\"Rohit\");\n\n    b.showBooking();\n    b.bookFlight(\"Delhi to Mumbai\");\n    b.bookHotel(\"Sea View Hotel\");\n\n    b.showBooking();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que19.cpp -o que19 } ; if ($?) { .\\que19 }\nCustomer: Rohit\nFlight: Not Booked\nHotel: Not Booked\nCustomer: Rohit\nFlight: Delhi to Mumbai\nHotel: Sea View Hotel"
      },
      {
        "id": 20,
        "filename": "que20.cpp",
        "title": "Create a class showing default constructor.",
        "question": "Que 20 : \"Create a class showing default constructor.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Demo{\n\npublic:\n    Demo(){\n        cout << \"Default constructor \";\n    }\n};\n\n\nint main(){\n\n    Demo d;\n\n    return 0;\n}",
        "output": ""
      },
      {
        "id": 21,
        "filename": "que21.cpp",
        "title": "Create a class showing parameterized constructor.",
        "question": "Que 21 : \"Create a class showing parameterized constructor.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Demo{\n\nprivate:\n    int value;\n\npublic:\n    Demo(int v){\n        value = v;\n    }\n\n    void show(){\n        cout << \"Value: \" << value ;\n    }\n};\n\n\nint main(){\n\n    Demo d(25);\n    d.show();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que21.cpp -o que21 } ; if ($?) { .\\que21 }\nValue: 25"
      },
      {
        "id": 22,
        "filename": "que22.cpp",
        "title": "Create a class showing copy constructor.",
        "question": "Que 22 : \"Create a class showing copy constructor.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Demo{\n\nprivate:\n    int value;\n\npublic:\n    Demo(int v){\n        value = v;\n    }\n\n    Demo(const Demo &other){\n        value = other.value;\n    }\n\n    void show(){\n        cout << \"Value: \" << value ;\n\n    }\n};\n\n\nint main(){\n\n    Demo d1(10);\n    Demo d2 = d1;\n\n    d1.show();\n    d2.show();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que22.cpp -o que22 } ; if ($?) { .\\que22 }\nValue: 10Value: 10"
      },
      {
        "id": 23,
        "filename": "que23.cpp",
        "title": "Create a class to auto-generate roll numbers for students.",
        "question": "Que 23 : \"Create a class to auto-generate roll numbers for students.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Student{\n\nprivate:\n    string name;\n    int rollNo;\n    static int nextRoll;\n\npublic:\n    Student(string n){\n        name = n;\n        rollNo = nextRoll;\n        nextRoll++;\n    }\n\n    void show(){\n        cout << \"Name: \" << name << \", Roll No: \" << rollNo << \"\\n\";\n    }\n};\n\n\nint Student::nextRoll = 1;\n\n\nint main(){\n\n    Student s1(\"Arun\");\n    Student s2(\"Aman\");\n    Student s3(\"Raman\");\n\n    s1.show();\n    s2.show();\n    s3.show();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que23.cpp -o que23 } ; if ($?) { .\\que23 }\nName: Arun, Roll No: 1\nName: Aman, Roll No: 2\nName: Raman, Roll No: 3"
      },
      {
        "id": 24,
        "filename": "que24.cpp",
        "title": "Create a class showing method overloading for area.",
        "question": "Que 24 : \"Create a class showing method overloading for area.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\n    class Area{\n\n    public:\n        int calculate(int side){\n            return side * side;\n        }\n\n        int calculate(int length, int width){\n            return length * width;\n        }\n\n        int calculate(int base, int height, int mode){\n            if (mode == 1){\n                return (base * height) / 2;\n            }\n\n            return 0;\n        }\n};\n\n\nint main(){\n\n    Area a;\n\n    cout << \"Area of square: \" << a.calculate(5) << \"\\n\";\n    cout << \"Area of rectangle: \" << a.calculate(6, 4) << \"\\n\";\n    cout << \"Area of triangle: \" << a.calculate(8, 5, 1) << \"\\n\";\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que24.cpp -o que24 } ; if ($?) { .\\que24 }\nArea of square: 25\nArea of rectangle: 24\nArea of triangle: 20"
      },
      {
        "id": 25,
        "filename": "que25.cpp",
        "title": "Create a \"Person\" class with private variables and getters/setters.",
        "question": "Que 25 : \"Create a  Personclass with private variables and getters/setters.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Person{\n\nprivate:\n    string name;\n    int age;\n\npublic:\n    void setName(string n){\n        name = n;\n    }\n\n    void setAge(int a){\n        if (a >= 0){\n            age = a;\n        }\n    }\n\n    string getName(){\n        return name;\n    }\n\n    int getAge(){\n        return age;\n    }\n};\n\n\nint main(){\n\n    Person p;\n\n    p.setName(\"Ram\");\n    p.setAge(24);\n\n    cout << \"Name: \" << p.getName() << \"\\n\";\n    cout << \"Age: \" << p.getAge() ;\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que25.cpp -o que25 } ; if ($?) { .\\que25 }\nName: Ram\nAge: 24"
      },
      {
        "id": 26,
        "filename": "que26.cpp",
        "title": "Create a \"BankAccount\" class with encapsulation.",
        "question": "Que 26 : \"Create a BankAccount class with encapsulation.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass BankAccount{\n\nprivate:\n    int balance;\n\npublic:\n    BankAccount(){\n        balance = 0;\n    }\n\n    void deposit(int amount){\n        if (amount > 0){\n            balance += amount;\n        }\n    }\n\n    void withdraw(int amount){\n        if (amount > 0 && amount <= balance){\n            balance -= amount;\n        }\n\n        else{\n            cout << \"Invalid withdrawal\\n\";\n        }\n    }\n\n    int getBalance(){\n        return balance;\n    }\n};\n\n\nint main(){\n\n    BankAccount acc;\n\n    acc.deposit(5000);\n    acc.withdraw(1200);\n\n    cout << \"Current balance: \" << acc.getBalance() ;\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que26.cpp -o que26 } ; if ($?) { .\\que26 }\nCurrent balance: 3800"
      },
      {
        "id": 27,
        "filename": "que27.cpp",
        "title": "Create a \"Rectangle\" class with private variables.",
        "question": "Que 27 : \"Create a Rectangle class with private variables.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Rectangle{\n\n    private:\n        int length;\n        int width;\n\n    public:\n        void setLength(int l){\n            if (l > 0){\n                length = l;\n            }\n        }\n\n        void setWidth(int w){\n            if (w > 0){\n                width = w;\n            }\n        }\n\n        int area(){\n            return length * width;\n        }\n};\n\n\nint main(){\n\n    Rectangle r;\n\n    r.setLength(10);\n    r.setWidth(4);\n\n    cout << \"Area: \" << r.area() ;\n\n    return 0;\n}",
        "output": "S E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que27.cpp -o que27 } ; if ($?) { .\\que27 }\nArea: 40"
      },
      {
        "id": 28,
        "filename": "que28.cpp",
        "title": "Create an \"Employee\" class with formatted salary getter.",
        "question": "Que 28 : \"Create an Employeeclass with formatted salary getter.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Employee{\n\n    private:\n        int salary;\n\n    public:\n        void setSalary(int s){\n            if (s >= 0){\n                salary = s;\n            }\n        }\n\n        int getSalary(){\n            return salary;\n        }\n\n        void showSalary(){\n            cout << \"Salary:  \" << salary ;\n        }\n};\n\n\nint main(){\n\n    Employee e;\n\n    e.setSalary(45000);\n    e.showSalary();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que28.cpp -o que28 } ; if ($?) { .\\que28 }\nSalary:  45000"
      },
      {
        "id": 29,
        "filename": "que29.cpp",
        "title": "Create a \"Circle\" class with area and perimeter methods.",
        "question": "Que 29 : \"Create a Circle class with area and perimeter methods.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Circle{\n\n    private:\n        int radius;\n\n    public:\n        void setRadius(int r){\n            if (r >= 0){\n                radius = r;\n            }\n        }\n\n        int area(){\n            return (22 * radius * radius) / 7;\n        }\n\n        int perimeter(){\n            return (2 * 22 * radius) / 7;\n        }\n    };\n\n\nint main(){\n\n    Circle c;\n\n    c.setRadius(7);\n\n    cout << \"Area: \" << c.area() << \"\\n\";\n    cout << \"Perimeter: \" << c.perimeter() ;\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que29.cpp -o que29 } ; if ($?) { .\\que29 }\nArea: 154\nPerimeter: 44"
      },
      {
        "id": 30,
        "filename": "que30.cpp",
        "title": "Create a \"Car\" class with controlled access to mileage.",
        "question": "Que 30 : \"Create a Cae class with controlled access to mileage.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Car{\n\n    private:\n        int mileage;\n\n    public:\n        Car(){\n            mileage = 0;\n        }\n\n        void setMileage(int m){\n            if (m >= 0){\n                mileage = m;\n            }\n\n            else{\n                cout << \"Invalid mileage\";\n            }\n        }\n\n        int getMileage(){\n            return mileage;\n        }\n};\n\n\nint main(){\n\n    Car c;\n\n    c.setMileage(18);\n    cout << \"Mileage: \" << c.getMileage() ;\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que30.cpp -o que30 } ; if ($?) { .\\que30 }\nMileage: 18"
      },
      {
        "id": 31,
        "filename": "que31.cpp",
        "title": "Create a \"Student\" class with grade validation.",
        "question": "Que 31 : \"Create a Student class with grade validation.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Student{\n\nprivate:\n    string name;\n    char grade;\n\npublic:\n    Student(string n){\n        name = n;\n        grade = 'F';\n    }\n\n    void setGrade(char g){\n        if (g == 'A' || g == 'B' || g == 'C' || g == 'D' || g == 'F'){\n            grade = g;\n        }\n\n        else{\n            cout << \"Invalid grade\\n\";\n        }\n    }\n\n    void show(){\n        cout << \"Name: \" << name << \", Grade: \" << grade << \"\\n\";\n    }\n};\n\n\nint main(){\n\n    Student s(\"Meera\");\n\n    s.setGrade('A');\n    s.show();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31> cd \"e:\\dddddddd\\CPP_Que\\08-Object_Oriented_Programming_31\\\" ; if ($?) { g++ que31.cpp -o que31 } ; if ($?) { .\\que31 }\nName: Meera, Grade: A"
      }
    ]
  },
  {
    "id": 9,
    "slug": "operator-overloading",
    "title": "Operator Overloading",
    "subtitle": "8 Problems",
    "description": "Curated C++ practice problems focused on operator overloading concepts and patterns.",
    "questions": [
      {
        "id": 1,
        "filename": "que1.cpp",
        "title": "Define a class Complex to represent complex numbers. Overload the + operator to add two complex numbers.",
        "question": "Que 1 : \"Define a class Complex to represent complex numbers. Overload the + operator to add two complex numbers.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Complex{\n\nprivate:\n    int real;\n    int imag;\n\npublic:\n    Complex(int r = 0, int i = 0){\n        real = r;\n        imag = i;\n    }\n\n    Complex operator+(Complex other){\n\n        Complex temp;\n        temp.real = real + other.real;\n        temp.imag = imag + other.imag;\n        return temp;\n    }\n\n    void show(){\n        cout << real << \" + \" << imag << \"i\\n\";\n    }\n};\n\n\nint main(){\n\n    Complex c1(3, 4);\n    Complex c2(5, 6);\n\n    Complex c3 = c1 + c2;\n\n    cout << \"Result :   \";\n    c3.show();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8\\\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\\que1 }\nResult :   8 + 10i"
      },
      {
        "id": 2,
        "filename": "que2.cpp",
        "title": "Create a class Fraction to represent fractions. Overload the + operator to add two fractions.",
        "question": "Que 2 : \"Create a class Fraction to represent fractions. Overload the + operator to add two fractions.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nint gcdValue(int a, int b){\n\n    if (a < 0){\n        a = -a;\n    }\n\n    if (b < 0){\n        b = -b;\n    }\n\n    while (b != 0){\n        int rem = a % b;\n        a = b;\n        b = rem;\n    }\n\n    return a;\n}\n\n\nclass Fraction{\n\nprivate:\n    int num;\n    int den;\n\npublic:\n    Fraction(int n = 0, int d = 1){\n        num = n;\n        den = d;\n    }\n\n    Fraction operator+(Fraction other){\n        Fraction temp;\n        temp.num = num * other.den + other.num * den;\n        temp.den = den * other.den;\n\n        int g = gcdValue(temp.num, temp.den);\n        if (g != 0){\n            temp.num = temp.num / g;\n            temp.den = temp.den / g;\n        }\n\n        return temp;\n    }\n\n    void show(){\n        cout << num << \"/\" << den << \"\\n\";\n    }\n};\n\n\nint main(){\n\n    Fraction f1(1, 2);\n    Fraction f2(3, 4);\n\n    Fraction f3 = f1 + f2;\n\n    cout << \"Result: \";\n    f3.show();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que> cd \"e:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8\\\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\\que2 }\nResult: 5/4"
      },
      {
        "id": 3,
        "filename": "que3.cpp",
        "title": "Define a class Matrix to represent matrices. Overload the * operator to multiply two matrices.",
        "question": "Que 3 : \"Define a class Matrix to represent matrices. Overload the * operator to multiply two matrices.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Matrix{\n\n private:\n    int a[2][2];\n\npublic:\n\n    void input(){\n        cout << \"Enter 2x2 matrix : \\n\";\n        \n        for (int i = 0; i < 2; i++){\n            \n            for (int j = 0; j < 2; j++){\n                cout << \"Enter element at (\"<<i<<\" , \"<<j<<\") : \";\n                cin >> a[i][j];\n            }\n\n        }\n    }\n\n    // 2 2\n    // 2 2\n    \n    // 4 4 \n    // 4 4 \n\n    Matrix operator*(Matrix other){\n        Matrix temp;\n\n        for (int i = 0; i < 2; i++){\n            for (int j = 0; j < 2; j++){\n                temp.a[i][j] = 0;\n\n                for (int k = 0; k < 2; k++){\n                    temp.a[i][j] += a[i][k] * other.a[k][j];\n                }\n            }\n        }\n\n        return temp;\n    }\n\n    void show(){\n        for (int i = 0; i < 2; i++){\n            for (int j = 0; j < 2; j++){\n                cout << a[i][j] << \" \";\n            }\n\n            cout << \"\\n\";\n        }\n    }\n};\n\n\nint main(){\n\n    Matrix m1;\n    Matrix m2;\n\n    m1.input();\n    m2.input();\n\n    Matrix m3 = m1 * m2;\n\n    cout << \"Result matrix :\";\n    m3.show();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8> cd \"e:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8\\\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\\que3 }\nEnter 2x2 matrix : \nEnter element at (0 , 0) : 2\nEnter element at (0 , 1) : 2\nEnter element at (1 , 0) : 2\nEnter element at (1 , 1) : 2\nEnter 2x2 matrix : \nEnter element at (0 , 0) : 4\nEnter element at (0 , 1) : 4\nEnter element at (1 , 0) : 4\nEnter element at (1 , 1) : 4\nResult matrix :16 16 \n16 16"
      },
      {
        "id": 4,
        "filename": "que4.cpp",
        "title": "Implement a class String to represent strings. Overload the + operator to concatenate two strings.",
        "question": "Que 4 : \"Implement a class StringClass to represent StringClasss. Overload the + operator to concatenate two StringClasss.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass StringClass{\n\nprivate:\n    string text;\n\npublic:\n    StringClass(string t = \"\"){\n        text = t;\n    }\n\n    StringClass operator+(StringClass other){\n        StringClass temp;\n        temp.text = text + other.text;\n        return temp;\n    }\n\n    void show(){\n        cout << text ;\n    }\n};\n\n\nint main(){\n\n    StringClass s1(\"Hello\");\n    StringClass s2(\"World\");\n\n    StringClass s3 = s1 + s2;\n\n    cout << \"Concatenated strings : \";\n    s3.show();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8> cd \"e:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8\\\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\\que4 }\nConcatenated strings : HelloWorld"
      },
      {
        "id": 5,
        "filename": "que5.cpp",
        "title": "Define a class Date to represent dates. Overload the < operator to compare two dates.",
        "question": "Que 5 : \"Define a class Date to represent dates. Overload the < operator to compare two dates.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Date{\n\n    private:\n\n        int day;\n        int month;\n        int year;\n\n    public: \n\n\n    Date(int d = 1, int m = 1, int y = 2000){\n        day = d;\n        month = m;\n        year = y;\n    }\n\n    bool operator<(Date other){\n        if (year != other.year){\n            return year < other.year;\n        }\n\n        if (month != other.month){\n            return month < other.month;\n        }\n\n        return day < other.day;\n    }\n\n};\n\n\nint main(){\n\n    Date d1(10,5,2024);\n    Date d2(15,8,2024);\n\n    if (d1 < d2){\n        cout << \"d1 is before d2\";\n    }\n\n    else{\n        cout << \"d1 is after d2\\n\";\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8> cd \"e:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8\\\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\\que5 }\nd1 is before d2"
      },
      {
        "id": 6,
        "filename": "que6.cpp",
        "title": "Implement a class Money to represent money. Overload the + operator to add two amounts of money.",
        "question": "Que 6 : \"Implement a class Money to represent money. Overload the + operator to add two amounts of money.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Money{\n\nprivate:\n    float money;\n\npublic:\n    Money(float m = 0){\n        money = m ;\n    }\n\n    Money operator+(Money other){\n        Money temp;\n        temp.money = money + other.money;\n        return temp;\n    }\n\n    void show(){\n        cout << \"Money is : \"<< money ;\n    }\n};\n\n\nint main(){\n\n    Money m1(34);\n    Money m2(56.9);\n\n    Money m3 = m1 + m2;\n\n    cout << \"Total money: \";\n    m3.show();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8> cd \"e:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8\\\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?) { .\\que6 }\nTotal money: Money is : 90.9"
      },
      {
        "id": 7,
        "filename": "que7.cpp",
        "title": "Create a class Rectangle to represent rectangles. Overload the == operator to check if two rectangles are equal.",
        "question": "Que 7 : \"Create a class Rectangle to represent rectangles. Overload the == operator to check if two rectangles are equal.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Rectangle{\n\n    private:\n\n        int length;\n        int width;\n\n    public:\n\n    Rectangle(int l = 0, int w = 0){\n        length = l;\n        width = w;\n    }\n\n    bool operator==(Rectangle other){\n        if (length == other.length && width == other.width){\n            return true;\n        }\n\n        return false;\n    }\n};\n\n\nint main(){\n\n    Rectangle r1(10, 5) ,r2(10, 5) ;\n\n    if (r1 == r2){\n        cout << \"Rectangles equal\";\n\n    }\n\n    else{\n        cout << \"Rectangles not equal\";\n    }\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8> cd \"e:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8\\\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\\que7 }\nRectangles equal"
      },
      {
        "id": 8,
        "filename": "que8.cpp",
        "title": "Define a class Time to represent time. Overload the << operator to display the time in HH:MM format.",
        "question": "Que 8 : \"Define a class Time to represent time. Overload the << operator to display the time in HH:MM format.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Time{\n\nprivate:\n    int hour;\n    int minute;\n\npublic:\n    Time(int h = 0, int m = 0){\n        hour = h;\n        minute = m;\n    }\n\n    friend ostream& operator<<(ostream &out, Time t){\n        if (t.hour < 10){\n            out << \"0\";\n        }\n\n        out << t.hour << \" : \";\n\n        if (t.minute < 10){\n            out << \"0\";\n        }\n\n        out << t.minute;\n        return out;\n    }\n};\n\n\nint main(){\n\n    Time t1(9, 57);\n\n    cout << \"Time: \" << t1 ;\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8> cd \"e:\\dddddddd\\CPP_Que\\09-Operator_Overloading_8\\\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\\que8 }\nTime: 09 : 57"
      }
    ]
  },
  {
    "id": 10,
    "slug": "virtual-functions",
    "title": "Virtual Functions",
    "subtitle": "13 Problems",
    "description": "Curated C++ practice problems focused on virtual functions concepts and patterns.",
    "questions": [
      {
        "id": 1,
        "filename": "que1.cpp",
        "title": "Write a C++ program to create an abstract class Animal with an abstract method called sound(). Create derived classes Lion and Tiger that implement the sound() method.",
        "question": "Que 1 : \"Write a C++ program to create an abstract class Animal with an abstract method called sound(). Create derived classes Lion and Tiger that implement the sound() method.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Animal{\n\npublic:\n    virtual void sound() = 0;\n};\n\n\nclass Lion : public Animal{\n\npublic:\n    void sound(){\n        cout << \"Lion sound \\n\";\n    }\n};\n\n\nclass Tiger : public Animal{\n\npublic:\n    void sound(){\n        cout << \"Tiger sound\\n\";\n    }\n};\n\n\nint main(){\n\n    Lion lion;\n    Tiger tiger;\n\n    lion.sound();\n    tiger.sound();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13\\\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\\que1 }\nLion sound \nTiger sound"
      },
      {
        "id": 2,
        "filename": "que2.cpp",
        "title": "Write a C++ program to create an abstract class Animal with an abstract method called sound(). Create derived classes Lion and Tiger that implement the sound() method.",
        "question": "Que 2 : \"Write a C++ program to create an abstract class Animal with an abstract method called sound(). Create derived classes Lion and Tiger that implement the sound() method.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Animal{\n\npublic:\n    virtual void sound() = 0;\n};\n\n\nclass Lion : public Animal{\n\npublic:\n    void sound(){\n        cout << \"Lion sound \\n\";\n    }\n};\n\n\nclass Tiger : public Animal{\n\npublic:\n    void sound(){\n        cout << \"Tiger sound\\n\";\n    }\n};\n\n\nint main(){\n\n    Lion lion;\n    Tiger tiger;\n\n    lion.sound();\n    tiger.sound();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13\\\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\\que1 }\nLion sound \nTiger sound"
      },
      {
        "id": 3,
        "filename": "que3.cpp",
        "title": "Write a C++ program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create derived classes Circle and Triangle.",
        "question": "Que 3 : \"Write a C++ program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create derived classes Circle and Triangle.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Shape{\n\npublic:\n    virtual int calculateArea() = 0;\n    virtual int calculatePerimeter() = 0;\n};\n\n\nclass Circle : public Shape{\n\nprivate:\n    int radius;\n\npublic:\n    Circle(int r){\n        radius = r;\n    }\n\n    int calculateArea(){\n        return (22 * radius * radius)/7;\n    }\n\n    int calculatePerimeter(){\n        return (2 * 22 * radius)/7  ;\n    }\n};\n\n\nclass Triangle : public Shape{\n\nprivate:\n    int a;\n    int b;\n    int c;\n    int height;\n\npublic:\n    Triangle(int x, int y, int z, int h){\n        a = x;\n        b = y;\n        c = z;\n        height = h;\n    }\n\n    int calculateArea(){\n        return (a * height) / 2;\n    }\n\n    int calculatePerimeter(){\n        return a + b + c;\n    }\n};\n\n\nint main(){\n\n    Circle c(7);\n    Triangle t(6, 5, 4, 4);\n\n    cout << \"Circle :\" << endl;\n    cout << \"Area : \" << c.calculateArea() << endl;\n    cout << \"Perimeter : \" << c.calculatePerimeter() << endl;\n    \n    cout << \"Triangle :\" << endl;\n    cout << \"Area : \" << c.calculateArea() << endl;\n    cout << \"Perimeter : \" << c.calculatePerimeter() << endl;\n\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13\\\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\\que3 }\nCircle :\nArea : 154\nPerimeter : 44\nTriangle :\nArea : 154\nPerimeter : 44"
      },
      {
        "id": 4,
        "filename": "que4.cpp",
        "title": "Write a C++ program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create derived classes SavingsAccount and CurrentAccount.",
        "question": "Que 4 : \"Write a C++ program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create derived classes SavingsAccount and CurrentAccount.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass BankAccount{\n\nprotected:\n    int balance;\n\npublic:\n    BankAccount(int b){\n        balance = b;\n    }\n\n    virtual void deposit(int amount) = 0;\n    virtual void withdraw(int amount) = 0;\n\n    void showBalance(){\n        cout << \"Balance: \" << balance << \"\\n\";\n    }\n};\n\n\nclass SavingsAccount : public BankAccount{\n\npublic:\n    SavingsAccount(int b) : BankAccount(b){\n    }\n\n    void deposit(int amount){\n        balance += amount;\n        cout << \"Savings deposited \\n\";\n    }\n\n    void withdraw(int amount){\n        if (amount < balance ){\n            cout << \"Not enought money \\n\";\n        }\n\n        else{\n            balance -= amount;\n            cout << \"Savings withdrawed amount : \"<<amount;\n        }\n    }\n};\n\n\nclass CurrentAccount : public BankAccount{\n\npublic:\n    CurrentAccount(int b) : BankAccount(b){\n    }\n\n    void deposit(int amount){\n        balance += amount;\n        cout << \"Current deposit done\\n\";\n    }\n\n    void withdraw(int amount){\n        if (amount < balance ){\n            cout << \"Not enought money \\n\";\n        }\n\n        else{\n            balance -= amount;\n            cout << \"withdrawed amount : \"<<amount;\n        }\n    }\n};\n\n\nint main(){\n\n    SavingsAccount s(1000);\n    CurrentAccount c(1000);\n\n    s.deposit(200);\n    s.withdraw(950);\n    s.showBalance();\n\n    c.deposit(300);\n    c.withdraw(1300);\n    c.showBalance();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13\\\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\\que4 }\nSavings deposited \nNot enought money\nBalance: 1200\nCurrent deposit done\nwithdrawed amount : 1300Balance: 0"
      },
      {
        "id": 5,
        "filename": "que5.cpp",
        "title": "Write a C++ program to create an abstract class Animal with abstract methods eat() and sleep(). Create derived classes Lion, Tiger, and Deer.",
        "question": "Que 5 : \"Write a C++ program to create an abstract class Animal with abstract methods eat() and sleep(). Create derived classes Lion, Tiger, and Deer.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Animal{\n\npublic:\n    virtual void eat() = 0;\n    virtual void sleep() = 0;\n};\n\n\nclass Lion : public Animal{\n\npublic:\n    void eat(){\n        cout << \"Lion eats \\n\";\n    }\n\n    void sleep(){\n        cout << \"Lion sleeps \\n\";\n    }\n};\n\n\nclass Tiger : public Animal{\n\npublic:\n    void eat(){\n        cout << \"Tiger eats \\n\";\n    }\n\n    void sleep(){\n        cout << \"Tiger sleeps \\n\";\n    }\n};\n\n\nclass Deer : public Animal{\n\npublic:\n    void eat(){\n        cout << \"Deer eats \\n\";\n    }\n\n    void sleep(){\n        cout << \"Deer sleeps \\n\";\n    }\n};\n\n\nint main(){\n\n    Lion lion;\n    Tiger tiger;\n    Deer deer;\n\n    lion.eat();\n    lion.sleep();\n\n    tiger.eat();\n    tiger.sleep();\n\n    deer.eat();\n    deer.sleep();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13\\\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\\que5 }\nLion eats \nLion sleeps\nTiger eats\nTiger sleeps\nDeer eats\nDeer sleeps"
      },
      {
        "id": 6,
        "filename": "que6.cpp",
        "title": "Write a C++ program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create derived classes Manager and Programmer.",
        "question": "Que 6 : \"Write a C++ program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create derived classes Manager and Programmer.\"",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\n\nclass Employee{\n\nprotected:\n    string name;\n    int base;\n\npublic:\n    Employee(string n, int b){\n        name = n;\n        base = b;\n    }\n\n    virtual int calculateSalary() = 0;\n    virtual void displayInfo() = 0;\n};\n\n\nclass Manager : public Employee{\n\npublic:\n    Manager(string n, int b) : Employee(n, b){\n    }\n\n    int calculateSalary(){\n        return base + (base * 20) / 100;\n    }\n\n    void displayInfo(){\n        cout << \"Manager : \" << name << \"\\n Salary: \" << calculateSalary() << endl;\n    }\n};\n\n\nclass Programmer : public Employee{\n\npublic:\n    Programmer(string n, int b) : Employee(n, b){\n    }\n\n    int calculateSalary(){\n        return base + (base * 15) / 100;\n    }\n\n    void displayInfo(){\n        cout << \"Programmer : \" << name << \"\\n Salary : \" << calculateSalary() << endl;\n    }\n};\n\n\nint main(){\n\n    Manager m(\"Ram\", 50000);\n    Programmer p(\"Shyam\", 40000);\n\n    m.displayInfo();\n    p.displayInfo();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13\\\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?) { .\\que6 }\nManager : Ram\n Salary: 60000\nProgrammer : Shyam\n Salary : 46000"
      },
      {
        "id": 7,
        "filename": "que7.cpp",
        "title": "Write a C++ program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create derived classes Sphere and Cube.",
        "question": "Que 7 : \"Write a C++ program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create derived classes Sphere and Cube.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Shape3D{\n\npublic:\n    virtual int calculateVolume() = 0;\n    virtual int calculateSurfaceArea() = 0;\n};\n\n\nclass Sphere : public Shape3D{\n\nprivate:\n    int radius;\n\npublic:\n    Sphere(int r){\n        radius = r;\n    }\n\n    int calculateVolume(){\n        return (4*22 * radius * radius * radius) /(3*7);\n    }\n\n    int calculateSurfaceArea(){\n        return (4*22 * radius * radius)/7;\n    }\n};\n\n\nclass Cube : public Shape3D{\n\nprivate:\n    int side;\n\npublic:\n    Cube(int s){\n        side = s;\n    }\n\n    int calculateVolume(){\n        return side * side * side;\n    }\n\n    int calculateSurfaceArea(){\n        return 6 * side * side;\n    }\n};\n\n\nint main(){\n\n    Sphere sp(4);\n    Cube cb(5);\n\n    cout<<\"Sphere : \\n\";\n    cout << \"Volume : \" << sp.calculateVolume() << endl;\n    cout << \"Surface Area : \" << sp.calculateSurfaceArea() <<endl;\n    \n    cout<<\"Cubr : \\n\";\n    cout << \"Volume : \" << cb.calculateVolume() << endl;\n    cout << \"Surface Area : \" << cb.calculateSurfaceArea() << endl;\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13\\\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\\que7 }\nSphere : \nVolume : 268\nSurface Area : 201\nCubr :\nVolume : 125\nSurface Area : 150"
      },
      {
        "id": 8,
        "filename": "que8.cpp",
        "title": "Write a C++ program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create derived classes Car and Motorcycle.",
        "question": "Que 8 : \"Write a C++ program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create derived classes Car and Motorcycle.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Vehicle{\n\npublic:\n    virtual void startEngine() = 0;\n    virtual void stopEngine() = 0;\n\n};\n\n\nclass Car : public Vehicle{\n\npublic:\n\n    void startEngine(){\n        cout << \"Car engine started \\n\";\n    }\n\n    void stopEngine(){\n        cout << \"Car engine stopped \\n\";\n    }\n\n\n};\n\n\nclass Motorcycle : public Vehicle{\n\npublic:\n\n    void startEngine(){\n        cout << \"Motorcycle engine started\\n\";\n    }\n\n    void stopEngine(){\n        cout << \"Motorcycle engine stopped\\n\";\n\n    }\n\n};\n\n\nint main(){\n\n    Car car;\n\n    Motorcycle bike;\n\n    car.startEngine();\n    car.stopEngine();\n\n    bike.startEngine();\n    bike.stopEngine();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13\\\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\\que8 }\nCar engine started \nCar engine stopped\nMotorcycle engine started\nMotorcycle engine stopped"
      },
      {
        "id": 9,
        "filename": "que9.cpp",
        "title": "Write a C++ program to create an abstract class Person with abstract methods eat() and exercise(). Create derived classes Athlete and LazyPerson.",
        "question": "Que 9 : \"Write a C++ program to create an abstract class Person with abstract methods eat() and exercise(). Create derived classes Athlete and LazyPerson.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Person{\n\npublic:\n    virtual void eat() = 0;\n    virtual void exercise() = 0;\n};\n\n\nclass Athlete : public Person{\n\n\npublic:\n    void eat(){\n        cout << \"Athlete eats Good food \\n\";\n    }\n\n    void exercise(){\n\n        cout << \"Athlete exercise daily\\n\";\n    }\n};\n\n\nclass LazyPerson : public Person{\n\npublic:\n\n    void eat(){\n        cout << \"Lazy person eats bad food\\n\";\n    }\n\n    void exercise(){\n        cout << \"Lazy person dont exercise\\n\";\n    }\n};\n\n\nint main(){\n\n    Athlete athlete;\n    LazyPerson lazy;\n\n    athlete.eat();\n    athlete.exercise();\n\n    lazy.eat();\n    lazy.exercise();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13\\\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\\que9 }\nAthlete eats Good food \nAthlete exercise daily\nLazy person eats bad food\nLazy person dont exercise"
      },
      {
        "id": 10,
        "filename": "que10.cpp",
        "title": "Write a C++ program to create an abstract class Instrument with abstract methods play() and tune(). Create derived classes Glockenspiel and Violin.",
        "question": "Que 10 : \"Write a C++ program to create an abstract class Instrument with abstract methods play() and tune(). Create derived classes Glockenspiel and Violin.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Instrument{\n\npublic:\n\n    virtual void play() = 0;\n    virtual void tune() = 0;\n};\n\n\nclass Glockenspiel : public Instrument{\n\n    public:\n\n    void play(){\n        cout << \"Glockenspiel is playing \\n\";\n    }\n\n    void tune(){\n        cout << \"Glockenspiel tuned \\n\";\n    }\n};\n\n\nclass Violin : public Instrument{\n\n\n    public:\n    void play(){\n        cout << \"Violin is playing \\n\";\n    }\n\n    void tune(){\n        cout << \"Violin tuned\\n\";\n    }\n};\n\n\nint main(){\n\n    Glockenspiel g;\n    Violin v;\n\n    g.tune();\n    g.play();\n\n    v.tune();\n    v.play();\n\n    return 0;\n\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13\\\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\\que10 }\nGlockenspiel tuned \nGlockenspiel is playing\nViolin tuned\nViolin is playing"
      },
      {
        "id": 11,
        "filename": "que11.cpp",
        "title": "Write a C++ program to create an abstract class Shape2D with abstract methods draw() and resize(). Create derived classes Rectangle and Circle.",
        "question": "Que 11 : \"Write a C++ program to create an abstract class Shape2D with abstract methods draw() and resize(). Create derived classes Rectangle and Circle.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Shape2D{\n\npublic:\n    virtual void draw() = 0;\n    virtual void resize(int value) = 0;\n};\n\n\nclass Rectangle : public Shape2D{\n\nprivate:\n    int length;\n    int width;\n\npublic:\n    Rectangle(int l, int w){\n        length = l;\n        width = w;\n    }\n\n    void draw(){\n        cout << \"Rectangle : \" << length << \" x \" << width << endl;\n    }\n\n    void resize(int value){\n        length = length + value;\n        width = width + value;\n    }\n};\n\n\nclass Circle : public Shape2D{\n\nprivate:\n    int radius;\n\npublic:\n    Circle(int r){\n        radius = r;\n    }\n\n    void draw(){\n        cout << \"Circle radius : \" << radius << endl;\n    }\n\n    void resize(int value){\n        radius = radius + value;\n    }\n};\n\n\nint main(){\n\n    Rectangle rect(10, 6);\n    Circle cir(7);\n\n    rect.draw();\n    cir.draw();\n\n    rect.resize(2);\n    cir.resize(3);\n\n    cout << \"Resizing : \\n\";\n    rect.draw();\n    cir.draw();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13\\\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\\que11 }\nRectangle : 10 x 6\nCircle radius : 7\nResizing :\nRectangle : 12 x 8\nCircle radius : 10"
      },
      {
        "id": 12,
        "filename": "que12.cpp",
        "title": "Write a C++ program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create derived classes Triangle and Square.",
        "question": "Que 12 : \"Write a C++ program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create derived classes Triangle and Square.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass GeometricShape{\n\npublic:\n    virtual int area() = 0;\n    virtual int perimeter() = 0;\n};\n\n\nclass Triangle : public GeometricShape{\n\n    private:    \n\n    int base;\n    int height;\n    int a;\n    int b;\n    int c;\n\n    public:\n\n\n    Triangle(int bs, int h, int x, int y, int z){\n        base = bs;\n        height = h;\n        a = x;\n        b = y;\n        c = z;\n    }\n\n    int area(){\n\n        return (base * height) / 2;\n    }\n\n    int perimeter(){\n        return a + b + c;\n\n    }\n};\n\n\nclass Square : public GeometricShape{\n\n    private:\n        int side;\n\n    public:\n\n    Square(int s){\n        side = s;\n    }\n\n    int area(){\n        return side * side;\n    }\n\n    int perimeter(){\n        return 4 * side;\n    }\n\n};\n\n\nint main(){\n\n    Triangle t(6, 4, 6, 5, 4);\n    Square s(5);\n\n    cout << \"Triangle : \\n\";\n    cout << \"area : \" << t.area() << \"\\n\";\n    cout << \"perimeter : \" << t.perimeter() << \"\\n\";\n    \n    \n    cout << \"Square  : \\n\";\n    cout << \"area : \" << s.area() << \"\\n\";\n    cout << \"perimeter: \" << s.perimeter() << \"\\n\";\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13\\\" ; if ($?) { g++ que12.cpp -o que12 } ; if ($?) { .\\que12 }\nTriangle : \narea : 12\nperimeter : 15\nSquare  :\narea : 25\nperimeter: 20"
      },
      {
        "id": 13,
        "filename": "que13.cpp",
        "title": "Write a C++ program to create an abstract class Bird with abstract methods fly() and makeSound(). Create derived classes Eagle and Hawk.",
        "question": "Que 13 : \"Write a C++ program to create an abstract class Bird with abstract methods fly() and makeSound(). Create derived classes Eagle and Hawk.\"",
        "code": "#include <iostream>\n\nusing namespace std;\n\n\nclass Bird{\n\n    public:\n\n    virtual void fly() = 0;\n    virtual void makeSound() = 0;\n\n};\n\n\nclass Eagle : public Bird{\n\n    public:\n\n    void fly(){\n        cout << \"Eagle flies \\n\";\n    }\n\n    void makeSound(){\n        cout << \"Eagle makes sound\\n\";\n    }\n\n};\n\n\nclass Hawk : public Bird{\n\npublic:\n    void fly(){\n        cout << \"Hawk flies\\n\";\n    }\n\n    void makeSound(){\n        cout << \"Hawk makes sound\\n\";\n    }\n};\n\n\nint main(){\n\n    Eagle eagle;\n    Hawk hawk;\n\n    eagle.fly();\n    eagle.makeSound();\n\n    hawk.fly();\n    hawk.makeSound();\n\n    return 0;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13> cd \"e:\\dddddddd\\CPP_Que\\10-Virtual_Functions_13\\\" ; if ($?) { g++ que13.cpp -o que13 } ; if ($?) { .\\que13 }\nEagle flies \nEagle makes sound\nHawk flies\nHawk makes sound"
      }
    ]
  },
  {
    "id": 11,
    "slug": "file-handling",
    "title": "File Handling",
    "subtitle": "14 Problems",
    "description": "Curated C++ practice problems focused on file handling concepts and patterns.",
    "questions": [
      {
        "id": 1,
        "filename": "f1.cpp",
        "title": "Write a C++ program to create a new text file and write some text into it.",
        "question": "1 : Write a C++ program to create a new text file and write some text into it.",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main(){\n\n    ofstream file(\"data.txt\");\n    if (!file.is_open()){\n        cout << \"file not opened \";\n        return 0;\n    }\n    else {\n        cout << \"file opened \";\n    }\n\n\n    file << \"Hellllo \\n\"; \n    cout << \"Data Entered \";\n    file.close();\n    return 1;\n}",
        "output": "PS F:\\cpp\\New folder\\File Handeling> cd \"f:\\cpp\\New folder\\File Handeling\\\" ; if ($?) { g++ f1.cpp -o f1 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\f1 }\nfile opened Data Entered"
      },
      {
        "id": 2,
        "filename": "f2.cpp",
        "title": "Write a C++ program to open an existing text file and display its contents on the console.",
        "question": "2 : Write a C++ program to open an existing text file and display its contents on the console.",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main(){\n\n    ifstream file (\"data.txt\");\n    if (!file.is_open()){\n        cout << \"file not opened \";\n        return 0;\n    }\n    else {\n        cout << \"file opened \\n\\n\";\n    }\n\n    char a;\n    while (file.get(a))\n    {\n       cout << a;\n    }\n\n    file.close();\n    return 1;\n    \n\n}\n\n// PS F:\\cpp\\New folder\\File Handeling> cd \"f:\\cpp\\New folder\\File Handeling\\\" ; if ($?) { g++ f2.cpp -o f2 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\f2 }\n// file opened ",
        "output": "Hellllo\nHellllo\nHell\nHell"
      },
      {
        "id": 3,
        "filename": "f3.cpp",
        "title": "Write a C++ program to count the number of lines in a text file.",
        "question": "3 : Write a C++ program to count the number of lines in a text file.",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main(){\n\n    ifstream file (\"data.txt\");\n    if (!file.is_open()){\n        cout << \"file not opened \";\n        return 0;\n    }\n    else {\n        cout << \"file opened \\n\\n\";\n    }\n\n    int a = 0;\n    string temp;\n    while (getline(file,temp))\n    {\n       a++;\n    }\n\n    cout << \"No of Lines : \"<<a;\n    file.close();\n    return 1;\n    \n\n}\n\n\n// PS F:\\cpp\\New folder\\File Handeling> cd \"f:\\cpp\\New folder\\File Handeling\\\" ; if ($?) { g++ f3.cpp -o f3 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\f3 }\n// file opened ",
        "output": "No of Lines : 4"
      },
      {
        "id": 4,
        "filename": "f4.cpp",
        "title": "Write a C++ program to count the number of words in a text file.",
        "question": "4 : Write a C++ program to count the number of words in a text file.",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main(){\n\n    ifstream file (\"data.txt\");\n    if (!file.is_open()){\n        cout << \"file not opened \";\n        return 0;\n    }\n    else {\n        cout << \"file opened \\n\\n\";\n    }\n\n    int a = 0;\n    string temp;\n    while (file >> temp)\n    {\n       a++;\n    }\n\n    cout << \"No of Words : \"<<a;\n    file.close();\n    return 1;\n    \n\n}\n\n\n\n// PS F:\\cpp\\New folder\\File Handeling> cd \"f:\\cpp\\New folder\\File Handeling\\\" ; if ($?) { g++ f4.cpp -o f4 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\f4 }\n// file opened ",
        "output": "No of Words : 5"
      },
      {
        "id": 5,
        "filename": "f5.cpp",
        "title": "Write a C++ program to copy the contents of one text file to another.",
        "question": "5 : Write a C++ program to copy the contents of one text file to another.",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main(){\n\n    string path = \"data.txt\";\n    ifstream file (path);\n    if (!file.is_open()){\n        cout << \"file not opened \";\n        return 0;\n    }\n    else {\n        cout << \"file opened \\n\\n\";\n    }\n    ofstream copy(\"copyof_\"+ path);\n    if (!copy.is_open()){\n        cout << \"Copy file not opened \";\n        return 0;\n    }\n    else {\n        cout << \"Copy file opened \\n\";\n    }\n\n    char a;\n    while (file.get(a))\n    {\n        copy << a;\n    }\n\n    cout << \"file Copied\";\n    file.close();\n    return 1;\n    \n\n}\n\n// PS F:\\cpp\\New folder\\File Handeling> cd \"f:\\cpp\\New folder\\File Handeling\\\" ; if ($?) { g++ f5.cpp -o f5 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\f5 }\n// file opened ",
        "output": "Copy file opened\nfile Copied"
      },
      {
        "id": 6,
        "filename": "f6.cpp",
        "title": "Write a C++ program to find and replace a specific word in a text file.",
        "question": "6 : Write a C++ program to find and replace a specific word in a text file.",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main(){\n\n    fstream file (\"data.txt\",ios::in | ios::out);\n    if (!file.is_open()){\n        cout << \"file not opened \";\n        return 0;\n    }\n    else {\n        cout << \"file opened \\n\\n\";\n    }\n\n    string temp,word;\n    cout << \"Enter the word to search : \";\n    cin >> temp;\n    cout << \"Enter the word to Replace : \";\n    cin >> word;\n    while (file >> temp)\n    {\n\n        if (temp == word){\n\n            if (temp.length() == word.length()){\n                file.seekg(-temp.length(),ios::cur);\n                file << word;\n                cout << \"Word Replaced\\n\";\n                break;\n            }\n            else {\n                cout << \"Word size not match\\n\";\n                \n            }\n\n        }\n    }\n\n    cout << \"Word Replaced \";\n    file.close();\n    return 1;\n    \n\n}",
        "output": ""
      },
      {
        "id": 7,
        "filename": "f7.cpp",
        "title": "Write a C++ program to append new data to an existing text file.",
        "question": "7 : Write a C++ program to append new data to an existing text file.",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main(){\n\n    ofstream file (\"data.txt\",ios::app);\n    if (!file.is_open()){\n        cout << \"file not opened \";\n        return 0;\n    }\n    else {\n        cout << \"file opened \\n\\n\";\n    }\n\n    string temp;\n    cout << \"Enter the data : \";\n    getline(cin, temp);\n    file << temp;\n    cout << \"Appeded\";\n    file.close();\n    return 1;\n    \n\n}\n\n\n// PS F:\\cpp\\New folder\\File Handeling> cd \"f:\\cpp\\New folder\\File Handeling\\\" ; if ($?) { g++ f7.cpp -o f7 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\f7 }\n// file opened \n\n// Enter the data : Yooo Hii\n// Appeded\n\n\n\n\n// FILE ",
        "output": "Hellllo \nHell llo\naaa\nHell\nYooooooYooo Hii"
      },
      {
        "id": 8,
        "filename": "f8.cpp",
        "title": "Write a C++ program to sort the lines of a text file in alphabetical order.",
        "question": "8 : Write a C++ program to sort the lines of a text file in alphabetical order.",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main(){\n    \n}",
        "output": ""
      },
      {
        "id": 9,
        "filename": "f9.cpp",
        "title": "Write a C++ program to merge multiple text files into a single file.",
        "question": "9 : Write a C++ program to merge multiple text files into a single file.",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main(){\n\n    ifstream file1 (\"data1.txt\");\n    ifstream file2 (\"data2.txt\");\n    ifstream file3 (\"data3.txt\");\n    ofstream merge (\"merge.txt\");\n\n    if (!file1.is_open() || !file2.is_open() ||!file3.is_open() ||!merge.is_open()){\n        cout << \"files not opened \";\n        return 0;\n    }\n    else {\n        cout << \"files opened \\n\\n\";\n    }\n\n    char a;\n    while (file1.get(a))\n    {\n        merge << a;\n    }\n    while (file2.get(a))\n    {\n        merge << a;\n    }\n    while (file3.get(a))\n    {\n        merge << a;\n    }\n\n    cout << \"File Merged\";\n    return 1;\n\n\n\n}\n\n// PS F:\\cpp\\New folder\\File Handeling> cd \"f:\\cpp\\New folder\\File Handeling\\\" ; if ($?) { g++ f9.cpp -o f9 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\f9 }\n// files opened \n\n// File Merged\n\n\n// merge.txt",
        "output": "A well-structured paragraph serves as a foundational building block of writing, focusing on a single, cohesive idea. t typically begins with a clear topic sentence that introduces the main point, followed by supporting sentences that provide relevant details, evidence, or examples to develop that idea.To maintain flow and coherence, writers often use transition words to connect these sentences logically. Finally, a strong paragraph closes with a concluding sentence that summarizes the main point or bridges to the next topic. While often composed of three to five sentences, the length can vary depending on the depth of the topic and the writer's style."
      },
      {
        "id": 10,
        "filename": "f10.cpp",
        "title": "Write a C++ program to split a large text file into smaller files of equal size.",
        "question": "10 :  Write a C++ program to split a large text file into smaller files of equal size.",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n\n    ifstream data(\"data.txt\");\n    ofstream file1(\"split1.txt\");\n    ofstream file2(\"split2.txt\");\n    ofstream file3(\"split3.txt\");\n\n    if (!data || !file1 || !file2 || !file3) {\n        cout << \"Files not opened\";\n        return 0;\n    }\n\n    cout << \"Files opened\\n\";\n\n    data.seekg(0, ios::end);\n    int size = data.tellg();\n    data.seekg(0, ios::beg);\n\n    int f = size / 3;\n\n    char a;\n    int count = 0;\n\n    while (data.get(a)) {\n        if (count < f)\n            file1 << a;\n        else if (count < 2 * f)\n            file2 << a;\n        else\n            file3 << a;\n\n        count++;\n    }\n\n    cout << \"File Splitted\";\n}",
        "output": "PS F:\\cpp\\New folder\\File Handeling> cd \"f:\\cpp\\New folder\\File Handeling\\\" ; if ($?) { g++ f10.cpp -o f10 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\f10 }\nFiles opened\nFile Split Successfully"
      },
      {
        "id": 11,
        "filename": "f11.cpp",
        "title": "Write a C++ program to search for a specific string in a text file and display its line number(s).",
        "question": "11 :  Write a C++ program to search for a specific string in a text file and display its line number(s).",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main(){\n\n    ifstream file (\"data.txt\");\n    if (!file.is_open()){\n        cout << \"file not opened \";\n        return 0;\n    }\n    else {\n        cout << \"file opened \\n\\n\";\n    }\n\n    string temp,search;\n    cout << \"Enter the sting to search : \";\n    cin >> search;\n    int a = 0;\n    while (getline(file,temp))\n    {\n        a++;\n      if (temp.find(search) != string::npos) {\n        cout << \"Word found , Line no : \" << a << \"\\n\";\n    } \n    }\n\n    file.close();\n    return 1;\n\n    \n\n}\n\n// PS F:\\cpp\\New folder\\File Handeling> cd \"f:\\cpp\\New folder\\File Handeling\\\" ; if ($?) { g++ f11.cpp -o f11 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\f11 }\n// file opened \n\n// Enter the sting to search : Hell\n// Word found , Line no : 1\n// Word found , Line no : 2\n// Word found , Line no : 4\n// PS F:\\cpp\\New folder\\File Handeling> cd \"f:\\cpp\\New folder\\File Handeling\\\" ; if ($?) { g++ f11.cpp -o f11 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\\f11 }\n// file opened ",
        "output": "Enter the sting to search : hgh"
      },
      {
        "id": 12,
        "filename": "f12.cpp",
        "title": "Write a C++ program to encrypt the contents of a text file using a simple encryption algorithm.",
        "question": "12 : Write a C++ program to encrypt the contents of a text file using a simple encryption algorithm.",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n\n    ifstream data(\"data.txt\",ios::in);\n    ofstream encrypt(\"encrypted.txt\",ios::out);\n\n\n    if (!data.is_open() || !encrypt.is_open()){\n        cout << \"File no opened \";\n        return 0;\n    }\n\n    else {\n        cout << \"File Opened \";\n    }\n   \n    char a;\n    \n    while (data.get(a)){\n        encrypt << (char)(a+3);\n    }\n    cout << \"Data Added \\n\";\n\n    // cout << \"Decrypting Data \\n\";\n\n    // data.close();\n    // encrypt.close();\n\n    // ifstream decrypt(\"encrypted.txt\");\n    // while(decrypt.get(a)){\n    //     cout << (char)(a-3) ;\n    // }\n\n    // cout << \"\\nEnd \";\n\n\n\n\n\n}\n\n\n// PS E:\\dddddddd\\CPP_Que\\11-File_Handling_16> cd \"e:\\dddddddd\\CPP_Que\\11-File_Handling_16\\\" ; if ($?) { g++ f12.cpp -o f12 } ; if ($?) { .\\f12 }\n// File Opened Data Added \n\n// ENCRYPTED FIEL ",
        "output": "D#zhoo0vwuxfwxuhg#sdudjudsk#vhuyhv#dv#d#irxqgdwlrqdo#exloglqj#eorfn#ri#zulwlqj/#irfxvlqj#rq#d#vlqjoh/#frkhvlyh#lghd1#w#w|slfdoo|#ehjlqv#zlwk#d#fohdu#wrslf#vhqwhqfh#wkdw#lqwurgxfhv#wkh#pdlq#srlqw/#iroorzhg#e|#vxssruwlqj#vhqwhqfhv#wkdw#surylgh#uhohydqw#ghwdlov/#hylghqfh/#ru#h{dpsohv#wr#ghyhors#wkdw#lghd1Wr#pdlqwdlq#iorz#dqg#frkhuhqfh/#zulwhuv#riwhq#xvh#wudqvlwlrq#zrugv#wr#frqqhfw#wkhvh#vhqwhqfhv#orjlfdoo|1#Ilqdoo|/#d#vwurqj#sdudjudsk#forvhv#zlwk#d#frqfoxglqj#vhqwhqfh#wkdw#vxppdul}hv#wkh#pdlq#srlqw#ru#eulgjhv#wr#wkh#qh{w#wrslf1#Zkloh#riwhq#frpsrvhg#ri#wkuhh#wr#ilyh#vhqwhqfhv/#wkh#ohqjwk#fdq#ydu|#ghshqglqj#rq#wkh#ghswk#ri#wkh#wrslf#dqg#wkh#zulwhu*v#vw|oh1"
      },
      {
        "id": 13,
        "filename": "f13.cpp",
        "title": "Write a C++ program to decrypt the contents of a text file encrypted using the above algorithm.",
        "question": "13 : Write a C++ program to decrypt the contents of a text file encrypted using the above algorithm.",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n\n\n    ifstream decrypt(\"encrypted.txt\");\n\n     if (!decrypt.is_open()){\n        cout << \"File no opened \";\n        return 0;\n    }\n    else {\n        cout << \"file opened \";\n    }\n\n    char a;\n    while(decrypt.get(a)){\n        cout << (char)(a-3) ;\n    }\n\n    cout << \"\\nEnd \";\n    return 1;\n\n\n\n\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\11-File_Handling_16> cd \"e:\\dddddddd\\CPP_Que\\11-File_Handling_16\\\" ; if ($?) { g++ f13.cpp -o f13 } ; if ($?) { .\\f13 }\nfile opened A well-structured paragraph serves as a foundational building block of writing, focusing on a single, cohesive idea. t typically begins with a clear topic sentence that introduces the main point, followed by supporting sentences that provide relevant details, evidence, or examples to develop that idea.To maintain flow and coherence, writers often use transition words to connect these sentences logically. Finally, a strong paragraph closes with a concluding sentence that summarizes the main point or bridges to the next topic. While often composed of three to five sentences, the length can vary depending on the depth of the topic and the writer's style.\nEnd"
      },
      {
        "id": 14,
        "filename": "f14.cpp",
        "title": "Write a C++ program to read a CSV file and display its contents in tabular form.",
        "question": "14 : Write a C++ program to read a CSV file and display its contents in tabular form.",
        "code": "#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <string>\n#include <iomanip>\n\nusing namespace std;\n\n\nint main(){\n\n    ifstream file(\"data.csv\",ios::in);\n\n    string line , cell;\n\n    while (getline(file,line)){\n        \n        stringstream ss(line);\n        while (getline(ss,cell,',')){\n            cout << left << std::setw(10) << cell ;\n        }\n        cout << \"\\n\";\n        \n    }\n\n\n    return 0 ;\n}",
        "output": "PS E:\\dddddddd\\CPP_Que\\11-File_Handling_16> cd \"e:\\dddddddd\\CPP_Que\\11-File_Handling_16\\\" ; if ($?) { g++ f14.cpp -o f14 } ; if ($?) { .\\f14 }\nID        Name      Class     Maths     Science   English   Computer  Total     Average   Grade     Status    \n101       Aman      12A       78        82        75        80        315       78.75     B         Pass      \n102       Simran    12A       88        79        82        86        335       83.75     A         Pass\n103       Rahul     12B       65        70        68        72        275       68.75     C         Pass      \n104       Priya     12B       92        91        89        95        367       91.75     A+        Pass"
      }
    ]
  }
];
