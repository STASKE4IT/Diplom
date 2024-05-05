import { useEffect } from "react";
import { useGetCoachesQuery } from "../../../api/workCardApi";
import { Coach } from "../../../api/types";

export const CoachesPage = () => {
    const { data, error, isLoading } = useGetCoachesQuery({
        page: 10,
        descending: true,
        offering: "Leadership Coaching",
        level: "Mentor",
        specialization: "Account Management",
    });

    useEffect(() => {
        if (data) {
            console.log("Data:", data);
        }
        if (error) {
            console.error("Error:", error);
        }
    }, [data, error]);

    if (isLoading) return <div>Loading...</div>;

    if (!data || !data.results || data.results.length === 0) {
        return <div>No coaches found</div>;
    }

    return (
        <div>
            <h2>Coaches</h2>
            {data.results.map((coach: Coach) => (
                <div key={coach.id} className="coachesCard">
                    {/* Display coach name */}
                    <p>{coach.name}</p>
                    {/* Display mini image */}
                    <img
                        src={coach.miniImage}
                        alt="Mini Image"
                        className="coachesLogo"
                    />
                    {/* Link to coach profile */}
                    <a href={`/coaches/${coach.id}`}>Profile</a>
                </div>
            ))}
        </div>
    );
};