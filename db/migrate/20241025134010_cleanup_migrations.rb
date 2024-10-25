class CleanupMigrations < ActiveRecord::Migration[7.0]
  def change
    # Exemple pour supprimer une table obsolète si nécessaire :
    # drop_table :old_table_name

    # Suppression de l'historique des migrations problématiques
    reversible do |dir|
      dir.up do
        # Les IDs des migrations sans fichier peuvent être supprimés manuellement
        execute <<-SQL
          DELETE FROM schema_migrations WHERE version IN (
            '20240112055401',
            '20240112074747',
            '20240112080440',
            '20240115074348',
            '20240115080846',
            '20240122075427',
            '20240127020930',
            '20240127045059',
            '20240128121412',
            '20240128121915',
            '20240128122839',
            '20240128123247',
            '20240128125913',
            '20240128130030',
            '20240128130106',
            '20240128130136',
            '20240129093211',
            '20240129093321',
            '20240129093347',
            '20240204073452',
            '20240317113656',
            '20240325052524',
            '20240325103729',
            '20240326101601',
            '20240328111804',
            '20240329120737',
            '20240329120816',
            '20240329120845',
            '20240403130647',
            '20240403144621',
            '20240414103751'
          );
        SQL
      end
    end
  end
end
