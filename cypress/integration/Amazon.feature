Feature: Add book to basket
  As a customer
  I want to add a book to the basket
  So that I can buy it later if I want to

  Scenario: Search for book
    Given the customer is on the "Amazon Home" page
     Then the page title should be "Amazon.co.uk"

     When the customer searches for "Harry Potter and the Cursed Child"
     Then the first result's title should be "Harry Potter and the Cursed Child - Parts One and Two"
      And the first result's badge should be "Best Seller"
      And the first result should contain a "Paperback" edition with a price of "£4.00"

     When the customer clicks on the first result's "Paperback" edition
     Then the page title should be "Harry Potter and the Cursed Child - Parts One and Two"
      And the book's title should be "Harry Potter and the Cursed Child - Parts One and Two"
      And the book's badge should be "#1 Best Seller"
      And the book's selected edition should be "Paperback"
      And the book's price should be "£4.00"

  Scenario: Add to basket
    Given the customer is on the "Book Details" page
     When the customer clicks on the "Add to Basket" button
     Then the added item should display a notification "Added to Basket"
      And there should be 1 item in the basket

     When the customer clicks on the "Edit Basket" button
     Then the basket item's title should be "Harry Potter and the Cursed Child - Parts One and Two"
      And the basket item's edition should be "Paperback"
      And the basket item's quantity should be 1
      And the basket item's price should be "£4.00"
      And the basket's total price should be "£4.00"
