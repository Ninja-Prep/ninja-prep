for i in {0..20}
do 
    touch "/ninjaprep/UserOutput${i}.txt"
    chown ninjaprep:ninjaprep "/ninjaprep/UserOutput${i}.txt"
done

touch "/ninjaprep/output.json"
chown ninjaprep:ninjaprep "/ninjaprep/output.json"