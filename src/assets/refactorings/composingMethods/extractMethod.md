1. **Code smell**: You have a code fragment that can be grouped together

2. **How to solve it**: Turn the fragment into a method whose name explains the purpose of the method

3. **Code example**:

    ```
    void println(decimal amount) {
      printBanner();

      //print details
      Console.WriteLine("name:" + name);
      Console.WriteLine("surname:" + surname);
      Console.WriteLine("amount:" + amount);
    }
    ```

    can be changed to 

    ```
    void println(decimal amount) {
      printBanner();
      printDetails(amount);
    }

    void prinDetails(decimal amount) {
      //print details
      Console.WriteLine("name:" + name);
      Console.WriteLine("surname:" + surname);
      Console.WriteLine("amount:" + amount);
    }
    ```
