export const GeneratePDF = (contractId) =>(
    $.ajax({
        method: 'GET',
        url: `/api/contract/${contractId}`
    })
);