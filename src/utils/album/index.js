const mapDBToModel = ({
    id,
    name,
    year,
    inserted_at,
    updated_at,
  }) => ({
    id,
    name,
    year,
    inserted_at,
    updated_at,
  });
  
  module.exports = { mapDBToModel };