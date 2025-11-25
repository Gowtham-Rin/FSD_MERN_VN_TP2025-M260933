let totalMonthlyexpences = [2000,1500,3500,4000]


function calculatetotal(Expences) {
    let total = 0;
    for(i = 0; i < Expences.length; i++) {
       total += Expences[i];
    }
    console.log(`Total Money Spent: ₹${total}`)
    
}

calculatetotal(totalMonthlyexpences);