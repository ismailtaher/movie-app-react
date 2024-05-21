import React, { forwardRef } from "react";
import SearchPost from "./SearchPost";

const Results = forwardRef(
  ({ searchResults, searchError, isSearchLoading, setShowResults }, ref) => {
    return (
      <div
        className="absolute top-[77px] bg-white w-full z-10 text-black"
        ref={ref}>
        {isSearchLoading && <h2>Loading Search</h2>}
        {!isSearchLoading && searchError && (
          <h2 className="text-rose-900">{searchError}</h2>
        )}
        {!isSearchLoading && !searchError && searchResults && (
          <ul className="px-2">
            {searchResults?.slice(0, 5).map((result) => (
              <SearchPost
                key={result.id}
                result={result}
                setShowResults={setShowResults}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
);

export default Results;
