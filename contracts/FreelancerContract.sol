// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract FreelancerContract {
    struct Freelancer {
        string firstName;
        string lastName;
        string areaOfExpertise;
        uint yearsOfExperience;
        bool isProfileCreated;
    }

    mapping(address => Freelancer) public freelancers;

    event ProfileCreated(address indexed freelancer, string firstName, string lastName, string areaOfExpertise, uint yearsOfExperience);

    function createProfile(string calldata _firstName, string calldata _lastName, string calldata _areaOfExpertise, uint _yearsOfExperience) external {
        require(!freelancers[msg.sender].isProfileCreated, "Profile already exists");
        
        Freelancer memory newFreelancer = Freelancer({
            firstName: _firstName,
            lastName: _lastName,
            areaOfExpertise: _areaOfExpertise,
            yearsOfExperience: _yearsOfExperience,
            isProfileCreated: true
        });

        freelancers[msg.sender] = newFreelancer;
        emit ProfileCreated(msg.sender, _firstName, _lastName, _areaOfExpertise, _yearsOfExperience);
    }
}
