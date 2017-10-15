pragma solidity ^0.4.11;

import "truffle/assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adoption.sol";

contract TestAdoption {
	Adoption adoption = Adoption(DeployedAddresses.Adoption());


	// Testing the adopt() function
	function testUserCanAdoptPet()() {
	uint returnedId = adoption.adopt(8);

	uint expected 8;

	Assert.equal(returnedId, expected, "Adoption of pet ID 8 should be recorded.");
	}
	// Testing retrieval of a single pet's owner
	function testGetAdopterAddressById() {
		// Expected owner is this contract
		address expected = this;
		address adopter = adoption.adopters(8);

		Assert.equal(adopter, expected, "Owner of pet ID 8 should be recorded.");
	}
		
		

}


