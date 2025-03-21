function calculateNetSalary(basicSalary, benefits) {
    const taxRates = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 32333, rate: 0.25 },
        { min: 32334, max: 500000, rate: 0.3 },
        { min: 500001, max: 800000, rate: 0.325 },
        { min: 800001, max: Infinity, rate: 0.35 }
    ];

    const nhifRates = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 11999, deduction: 250 },
        { min: 12000, max: 14999, deduction: 350 },
        { min: 15000, max: 19999, deduction: 450 },
        { min: 20000, max: 24999, deduction: 550 },
        { min: 25000, max: 29999, deduction: 650 },
        { min: 30000, max: 34999, deduction: 750 },
        { min: 35000, max: 39999, deduction: 850 },
        { min: 40000, max: 44999, deduction: 950 },
        { min: 45000, max: 49999, deduction: 1050 },
        { min: 50000, max: 59999, deduction: 1150 },
        { min: 60000, max: Infinity, deduction: 1250 }
    ];

    const nssfRate = 0.06;

    let grossSalary = basicSalary + benefits;
    let payee = 0;
    let nhifDeduction = 0;
    let nssfDeduction = grossSalary * nssfRate;

    for (let rate of taxRates) {
        if (grossSalary <= rate.min) {
            let taxableAmount = Math.min(grossSalary - rate.min, rate.max - rate.min);
            payee += taxableAmount * rate.rate;
        }
    }
    for (let rate of minRates) {
        if (grossSalary >= rate.min && grossSalary <= rate.max) {
            nhifDeduction = rate.deduction;
            break;
        }
    }
    let netSalary = grossSalary - payee -nhifDeduction - nssfDeduction;

    console.log('Gross Salary: ${grossSalary}');
    console.log('Payee(Tax): ${payee}');
    console.log('NHIF Deduction: ${nhifDeduction}');
    console.log('NSSF Deduction: ${nssfDeduction}');
    console.log('Net Salary: ${netSalary}');
}
calculateSalary(50000, 10000, 5000);