
	describe("Capitalize First char", function () {
		it("should capitalize first character in a String", function () {
			expect(capitalizeFirstChar("john")).toEqual("John");
		});
	});

	describe("Validation of each line entered", function () {
		it("valid Input", function () {
			expect(validateInputEachLine("john:45")).toEqual(true);
		});
		it("valid condition-Allowed . in name as it sounded meaningful", function () {
			expect(validateInputEachLine("T.Ganesan:20")).toEqual(true);
		});
		it("Invalid name", function () {
			expect(validateInputEachLine("joh4n:45")).toEqual(false);
		});
		it("Invalid number", function () {
			expect(validateInputEachLine("john:4ds5")).toEqual(false);
		});
		it("#special character check", function () {
			expect(validateInputEachLine("joh#n:45")).toEqual(false);
		});
		it("- special character check ", function () {
			expect(validateInputEachLine("----")).toEqual(false);
		});
		it("double colon check", function () {
			expect(validateInputEachLine("John::45")).toEqual(false);
		});
		it("colon in the beginning", function () {
			expect(validateInputEachLine(":john45")).toEqual(false);
		});
		it("semi-colon in the beginning", function () {
			expect(validateInputEachLine(";john45")).toEqual(false);
		});
	

	});

	describe("Checks if the string is palindrome", function () {
		it("should return true", function () {
			expect(PalindromeChecker("Madam")).toEqual(true);
		});
		it("should return true", function () {
			expect(PalindromeChecker("Ah,Satan sees Natasha!")).toEqual(true);
		});
		it("should return true", function () {
			expect(PalindromeChecker("bob")).toEqual(true);
		});
		it("should return false", function () {
			expect(PalindromeChecker("john")).toEqual(false);
		});
	

	});

	describe("Calculates sum for same users", function () {
		
		var input = "John:2\nJane:3\nJohn:4\nJane:5";
		var outputObj ={John:6,Jane:8};
		it("success condition- valid input", function () {
			expect(calculateSumForUsers(input)).toEqual(outputObj);
		});

		var input = "4ohn:2\nJan5:3\nJohn:4\nJane:5";
		var outputObj ={err:"4ohn:2|Jan5:3"};

		it("Failure condition- error obj population", function () {
			expect(calculateSumForUsers(input)).toEqual(outputObj);
		});
		
	

	});
	
	
	
