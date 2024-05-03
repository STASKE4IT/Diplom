import { useEffect, useState } from "react";
import { ICompany } from "../../../api/types";
import { useGetCompaniesQuery } from "../../../api/workCardApi";

export const Companies = () => {
    const [companies, setCompanies] = useState<ICompany[]>([]);

    const { data: companiesData, isLoading, isError } = useGetCompaniesQuery("1");

    useEffect(() => {
        if (companiesData) {
            const resultArray = companiesData.results;
            const companyData = resultArray.map((result) => ({
                name: result.name,
                industry: result.industry,
                size: result.size,
                location: result.location,
                page: result.page 
            }));
            
            setCompanies(companyData);
        }
    }, [companiesData]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error...</div>;

    return (
        <div>
            {companies.map((company, index) => (
                <div key={index} className="CompanyList">
                    <p>{company.name}</p>
                </div>
            ))}
            Companies
        </div>
    );
};
