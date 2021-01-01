let Employee = {
    salary: 100000
};

let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minsalary: 10000, maxsalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minsalary: 50000, maxsalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minsalary: 100000, maxsalary: 200000 }
};

export function getCadre() {
  if (Employee.salary >= payGrades.entryLevel.minsalary && Employee.salary <= payGrades.entryLevel.maxsalary) {
    return 'entryLevel';
  } else if (Employee.salary >= payGrades.midLevel.minsalary && Employee.salary <= payGrades.midLevel.maxsalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

export function calculateTax() {
  return payGrades[getCadre()].taxMultiplier * Employee.salary;
}

export function getBenefits() {
  return payGrades[getCadre()].benefits.join(', ');
}

export function calculateBonus() {
  return .02 * Employee.salary;
}

export function reimbursementEligibility() {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0; 
  let employeeBenefits = payGrades[getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}

export default Employee;
